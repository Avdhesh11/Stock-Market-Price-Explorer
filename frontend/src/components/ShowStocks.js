import React from 'react';

const ShowStocks = ({stocks}) => {

    function reformatDate(dateStr)
    {
        const dArr = dateStr.split("-"); 
        return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0];
    }

    return (
        <div className='showstocks'>
            <table id="stocks">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Date</th>
                        <th>Closing Price</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock,index) => (
                        <tr key={stock.id}>
                            <td>{index+1}</td>
                            <td>{reformatDate(stock.date.substring(0,10))}</td>
                            <td>{stock.closingPrice}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default ShowStocks;