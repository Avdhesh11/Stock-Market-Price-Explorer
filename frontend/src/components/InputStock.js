import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowStocks from './ShowStocks';


const HomeScreen = () => {

    const [name,setName] = useState("");
    const [startDate,setStartDate] = useState("");
    const [endDate,setEndDate] = useState("");
    const [stocks,setsStocks] = useState([]);
    const [showStocks,setShowStocks] = useState(true);

    useEffect(()=>{
        if(stocks.length!==0){
            setShowStocks(true);
        }
    },[stocks])

    const submitHandler = async (e) =>{
        e.preventDefault();
        const {data} = await axios.post('/api/getstocks',{name,startDate,endDate});
        setShowStocks(false);
        if(data){
            setsStocks(data);
        }
    } 

    return (
      
        <div className="center">
            <h1>Stock Market Price Explorer</h1>
            <div className="container">
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-25">
                    <label for="name">Stock</label>
                    </div>
                    <div className="col-75">
                    <input type="text" placeholder="Enter Stock" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                    <label for="name">Start Date</label>
                    </div>
                    <div className="col-75">
                    <input type="date" onChange={(e) => setStartDate(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                    <label for="name">End Date</label>
                    </div>
                    <div className="col-75">
                    <input type="date" onChange={(e) => setEndDate(e.target.value)}/>
                    </div>
                </div>
            
            <br/>
            <div class="row">
                <button type="submit">Find Stocks</button>
            </div>
            </form>
            </div>
            {showStocks && stocks.length!==0 && <ShowStocks stocks={stocks}/>}
        </div>
    )
}


export default HomeScreen;