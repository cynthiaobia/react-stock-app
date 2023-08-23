import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";

import data from '../data.js';

export default function Price(props){

  const stocks = data;
  // console.log(stocks)
  const { symbol } = useParams();
  console.log(symbol);
  
  function findStocks() {
    for (let i = 0; i < stocks.length; i++) {
      let currentStock = null;
      if (stocks[i].symbol === symbol) {
        currentStock = stocks[i]
        console.log(currentStock)
        return currentStock;
      }
    }
  }

  const currentStock = findStocks()
  
  // // console.log(symbol)
  // const [stock, setStock] = useState(null);

  // console.log(symbol)
  // const getStock = async () => {
  //   const apiKey = `25ab40cf0ced69a550e716e127b7fc96`;
  //   // const url = `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apiKey=${apiKey}` 
  //   // const url = `https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=${apiKey}`
  //   // const url = `https://financialmodelingprep.com/api/v3/available-traded/list?&limit=10&apikey=${apiKey}`
    
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setStock(data)
  //     console.log(data)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // useEffect(() => {
  //   getStock()
  // }, []);

  // console.log(stock);

  return(
    <div>
      <h1>{symbol} / {currentStock.lastPrice}</h1>
    </div>
  )
  

}
