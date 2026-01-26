import React from 'react'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export default function Education() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
        <div className='experience-container'>
            <h2>Education</h2>
              <div className='input-group'>
                <label htmlFor="institution">
                  <span>Institution</span>
                </label>
                <input type="text" id="institution" placeholder='Ex. MIT' required/>
              </div>
    
              <div className='input-group'>
                <label htmlFor="institution_location">
                  <span>Location</span>
                </label>
                <input type="text" id="institution_location" placeholder='Ex. Los Angeles' required />
              </div>

              <div className='input-group'>
                <label htmlFor="institution_study">
                  <span>Field of Study</span>
                </label>
                <input type="text" id="institution_study" placeholder='Ex. Computer Science' required />
              </div>
    
              <div className='input-group'>
                <label htmlFor="institution_start_date">
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
                <label htmlFor="institution_end_date">
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
    
        </div>
  )
}
