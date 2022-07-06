import express from 'express'
import mysql from 'mysql'
import data from './data.js';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'smpe'
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('My sql connected')
})

const app = express()
app.use(express.json())

app.get('/createdb',(req,res)=>{
    let sql = 'CREATE DATABASE smpe';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created');
    })
})

app.get('/createtable',(req,res)=>{
    let sql = 'CREATE TABLE stocks(id int AUTO_INCREMENT,stock VARCHAR(255),date DATE,closingPrice int,PRIMARY KEY (id))';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Table created');
    })
})


//add stocks
app.get('/addstocks',(req,res)=>{

    let sql = 'INSERT INTO stocks (stock, date, closingPrice) VALUES ?';
    let q =  db.query(sql,
        [data.map(item => [item.stock, item.date, item.closingPrice])]
        , (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('stocks added');
    })
    
})


//get stocks with given name,start date and end date
app.post('/api/getstocks',(req,res)=>{

    const {name,startDate,endDate}= req.body;

    let sql = `SELECT * FROM stocks where stock='${name}' AND DATE(date) BETWEEN '${startDate}' AND '${endDate}';`;

    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.json(result);
    })

})


app.get('/',(req,res) => {
    res.send('API is running....')
})

const PORT = 5000

app.listen(PORT, console.log(`Server running on port ${5000}`))