import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

function Experience() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className='experience-container'>
        <h2>Experience</h2>
          <div className='input-group'>
            <label htmlFor="title">
              <span>Title</span>
            </label>
            <input type="text" id="input-group" placeholder='Ex. Project Manager' required />
          </div>

          <div className='input-group'>
            <label htmlFor="company_name">
              <span>Company Name</span>
            </label>
            <input type="text" id="company_name" placeholder='Ex. Meta' required />
          </div>

          <div className='input-group'>
            <label htmlFor="company_location">
              <span>Location</span>
            </label>
            <input type="text" id="company_location" placeholder='Ex. Los Angeles' required />
          </div>

          <div className='input-group'>
            <label htmlFor="company_start_date">
              <span>Start Date</span>
            </label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="MM/DD/YYYY"
                />
            </div>
          </div>

          <div className='input-group'>
            <label htmlFor="company_present">
              <span>Present</span>
            </label>
            <input type="checkbox" id="company_present"/>
          </div>

          <div className='input-group'>
            <label htmlFor="company_end_date">
              <span>End Date</span>
            </label>
            <div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="MM/DD/YYYY"
                />
            </div>
          </div>
          
          <div className='input-group'>
            <label htmlFor="job_description">
              <span>Description</span>
            </label>
            <textarea id="job_description" placeholder='Describe your role and achievements...'></textarea>
          </div>

    </div>
  )
}

export default Experience;
