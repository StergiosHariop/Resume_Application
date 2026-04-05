import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export default function Education({onSave}) {
  const [localData, setLocalData] = useState({
    name: '',
    location: '',
    startDate: null,
    endDate: null,
    degree: '',
    major: '',
    gpa: ''
  });


  const handleChange = (field, value) => {
    setLocalData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    Object.entries(localData).forEach(([field, value]) => {
      if (value !== '') {
        onSave(field, value instanceof Date ? dateFormat(value) : value);
      };
    });
  };

  // Date formatting to MM/DD/YYYY
  const dateFormat = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  return (
        <>
          <form onSubmit={handleSubmitForm}>
            <div className='input-group'>
              <label htmlFor="institution">
                <span>Institution</span>
              </label>
              <input
                type="text" 
                id="institution" 
                placeholder='Ex. MIT' 
                value={localData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required/>
            </div>

            <div className='input-group'>
              <label htmlFor="institution_location">
                <span>Location</span>
              </label>
              <input 
                type="text" 
                id="institution_location"
                placeholder='Ex. Los Angeles'
                value={localData.location} 
                onChange={(e) => handleChange("location", e.target.value)}
                required />
            </div>

            <div className='input-group'>
              <label htmlFor="major">
                <span>Field of Study</span>
              </label>
              <input 
                type="text" 
                id="major" 
                placeholder='Ex. Computer Science'
                value={localData.major}
                onChange={(e) => handleChange("major", e.target.value)}
                required />
            </div>

            <div className='input-group'>
              <label htmlFor="degree">
                <span>Degree</span>
              </label>
              <input 
                type="text" 
                id="degree" 
                placeholder="Ex. Bachelor's Degree"
                value={localData.degree}
                onChange={(e) => handleChange("degree", e.target.value)}
                required />
            </div>

            <div className='input-group'>
              <label htmlFor="gpa">
                <span>GPA (Optional)</span>
              </label>
              <input 
                type="text" 
                id="gpa" 
                placeholder='2.5'
                onChange={(e) => handleChange("gpa", e.target.value)}
                value={localData.gpa} />
            </div>

            <div className='input-group'>
              <label htmlFor="institution_start_date">
                <span>Start Date</span>
              </label>
              <div>
                <DatePicker
                  selected={localData.startDate}
                  dateFormat={"MM/dd/yyyy"}
                  onChange={(date) => handleChange("startDate", date)}
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
                  selected={localData.endDate}
                  onChange={(date) => handleChange("endDate", date)}
                  dateFormat={"MM/dd/yyyy"}
                  placeholderText="MM/DD/YYYY"
                  />
              </div>
            </div>
            <button type='submit'>Save</button>
          </form>
        </>
  )
}
