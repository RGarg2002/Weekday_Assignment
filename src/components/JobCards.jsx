import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/JobCards.css';
import axios  from 'axios';

const JobCards = () => {
  const [data, setData] = useState([]);
  
  function handleScroll (event) {
    console.log("event", event);
  }

  async function fetchData () {
      try {
        const data = await axios.get('http://localhost:4000/data', {params: {hello : 1}});
        setData(data.data);
      }

      catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    try {
        fetchData();
    }
    catch (error) {
      console.log(error);
    }
  }, []);
  
  return (
    <div id='jobcards-container' className='jobcards-container' onScroll={handleScroll}> 
        {data?.jdList?.map((cardData) => <Card key={cardData.jdUid} data={cardData}/>)}
    </div>
  )
}

export default JobCards