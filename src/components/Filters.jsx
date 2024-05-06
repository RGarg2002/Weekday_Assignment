import React from 'react'
import '../styles/Filters.css';

const Filters = () => {
  return (
    <div className='filters-container'>
      <div className='filter role-filter'>
        <select name="roles" id="role-select">
          <option value="">Roles</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Flutter">Flutter</option>
          <option value="Ios">Ios</option>
        </select>
      </div>
      <div className='filter numemployees-filter'>
        <select name="roles" id="role-select">
          <option value="">Roles</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Flutter">Flutter</option>
          <option value="Ios">Ios</option>
        </select>
      </div>
      <div className='filter exp-filter'>
        <select name="roles" id="role-select">
          <option value="">Roles</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Flutter">Flutter</option>
          <option value="Ios">Ios</option>
        </select>
      </div>
      <div className='filter location-filter'>
        <select name="roles" id="role-select">
          <option value="">Roles</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Flutter">Flutter</option>
          <option value="Ios">Ios</option>
        </select>
      </div>
      <div className='filter salary-filter'>
        <select name="roles" id="role-select">
          <option value="">Roles</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Flutter">Flutter</option>
          <option value="Ios">Ios</option>
        </select>
      </div>
    </div>
  )
}

export default Filters