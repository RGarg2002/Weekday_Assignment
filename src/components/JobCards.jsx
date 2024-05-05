import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/JobCards.css';

const JobCards = () => {
  const [data, setData] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
      "limit": 10,
      "offset": 0
    });
    
  const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body
  };
    
  async function fetchData() {
    const data = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.error(error));

    setData(data);
  }
  
  useEffect(() => {
    fetchData();
  }, [data])
  
  return (
    <div className='jobcards-container'>
        {console.log("data", data)}
        {data?.jdList?.map((cardData) => <Card key={cardData.jdUid} data={cardData}/>)}
    </div>
  )
}

export default JobCards