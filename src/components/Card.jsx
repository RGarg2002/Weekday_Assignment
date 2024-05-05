import React from 'react'
import "../styles/Card.css";

const Card = ({data}) => {
  return (
    <div className='card-container'>
        <div className='time-passed'>
            Posted 10 days ago
        </div>
        <div className='logo-details'>
            <div className='company-logo'>
                <img src={data.logoUrl}></img>
            </div>
            <div className='company-details'>
                <p className='company-details__name'>{data.companyName}</p>
                <p className='company-details__jobrole'>{data.jobRole}</p>
                <p className='company-details__location'>{data.location}</p>
            </div>
        </div>
        <p className='estimated-salary'>Estimated Salary: {data.minJdSalary ? data.minJdSalary : 0} - {data.maxJdSalary} </p>
        <div className='about-company'>
            <p className='about-company__heading'>About Company:</p>
            <p className='about-company__subheading'>About us</p>
            <p className='about-company__content'><div class="overlap"></div><div className='view-job'>View job</div>{data.jobDetailsFromCompany}</p>
        </div>
        <div className='experience'>
            <div className='experience__heading'>Minimum Experience</div>
            <div className='experience__content'>{data.minExp} years</div>
        </div>
        <div className='buttons'>
            <button className='apply-btn'>Easy Apply</button>
            <button className='referral-btn'>Unlock referral tasks</button>
        </div>
    </div>
  );
}

export default Card