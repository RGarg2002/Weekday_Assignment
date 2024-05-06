import React, { useState } from 'react';
import '../styles/Filters.css';

const Filters = ({onFilterSelect}) => {
  const distinctRoles = ['frontend', 'ios', 'android', 'tech lead', 'backend'];
  const distinctLocations  = ['delhi ncr', 'mumbai', 'remote', 'chennai', 'bangalore'];
  const minExperience = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const minSalary = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const [filters, setFilters] = useState({role: "all", exp: 0, location: "all", salary: 0});

  function handleFilterChange (event) {
      setFilters({...filters, [event.target.parentNode.name]: event.target.value})
      onFilterSelect({...filters, [event.target.parentNode.name]: event.target.value});
  }

  return (
    <div className='filters-container'>
      <div className='filter role-filter'>
        <select name="role" id="role-select">
            <option value="">Roles</option>
            <option onClick={handleFilterChange} value="all">All</option>
            {distinctRoles.map((role) => <option onClick={handleFilterChange} value={role}>{role}</option>)}
        </select>
      </div>
      <div className='filter exp-filter'>
        <select name="exp" id="role-select">
            <option value="">Min Experience</option>
            <option onClick={handleFilterChange} value="0">All</option>
            {minExperience.map((exp) => <option onClick={handleFilterChange} value={exp}>{exp}</option>)}
        </select>
      </div>
      <div className='filter location-filter'>
        <select name="location" id="role-select">
            <option value="">Location</option>
            <option onClick={handleFilterChange} value="all">All</option>
            {distinctLocations.map((location) => <option onClick={handleFilterChange} value={location}>{location}</option>)}
        </select>
      </div>
      <div className='filter salary-filter'>
        <select name="salary" id="role-select">
            <option value="">Min Salary</option>
            <option onClick={handleFilterChange} value="0">All</option>
            {minSalary.map((sal) => <option onClick={handleFilterChange} value={sal}>{sal}</option>)}
        </select>
      </div>
    </div>
  )
}

export default Filters