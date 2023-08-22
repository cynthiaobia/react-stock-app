import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";

export default function Price(props){

  const { symbol } = useParams();
  const [stock, setStock] = useState(null);

  const getStock = async () => {
    const apiKey = `25ab40cf0ced69a550e716e127b7fc96`;
    const url = `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apiKey=${apiKey}` 
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      setStock(data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getStock()
  }, []);

  console.log(stock);

  return(
    <div>
      <h1>{symbol}</h1>
      {stock.map((item, index) => <div key={index}>{item.price}</div>)}
    </div>
  )
  

}
