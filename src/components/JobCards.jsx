import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/JobCards.css';
import axios  from 'axios';

const JobCards = ({filters}) => {
  console.log(filters);
  const [data, setData] = useState([]);
  const [filterValues, setFilterValues] = useState([]);

  async function fetchData () {
      try {
        const data = await axios.get('http://localhost:4000/data', {params: filters});
        setData(data.data);
      }

      catch (error) {
        console.log(error);
      }
  }

  async function fetchFilterValues () {
      try {
          const data = await axios.get('http://localhost:4000/filters');
          setFilterValues(data);
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
    try {
        fetchData();
        // fetchFilterValues();
    }
    catch (error) {
      console.log(error);
    }
  }, [filters]);
  
  return (
    <div id='jobcards-container' className='jobcards-container'> 
        {data?.map((cardData) => <Card key={cardData.jdUid} data={cardData}/>)}
    </div>
  )
}

export default JobCards