import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/JobCards.css';
import axios  from 'axios';

const JobCards = ({filters}) => {
  console.log(filters);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(9);
  const [filterValues, setFilterValues] = useState([]); //for fetching filter values

  async function fetchData () {
      try {
        const data = await axios.get('http://localhost:4000/data', {params: {...filters, offset}});
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

  // function handleScroll (event) {
  //     event.preventDefault();
  //     const ofst = ((window.scrollY / 1000) + 1) * 9;
  //     if (ofst > offset)
  //       setOffset(ofst);
  // }

  // window.addEventListener("scroll", handleScroll);
  useEffect(() => {
    try {
        fetchData();
        // fetchFilterValues();
    }
    catch (error) {
      console.log(error);
    }
  }, [filters, offset]);

  return (
    <div id='jobcards-container' className='jobcards-container'> 
        {data?.map((cardData) => <Card key={cardData.jdUid} data={cardData}/>)}
    </div>
  )
}

export default JobCards