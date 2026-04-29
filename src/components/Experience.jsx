import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import { dateFormat } from '../DateFormat';

function Experience({ onSave }) {
  const [localData, setLocalData] = useState({
    title: '',
    companyName: '',
    location: '',
    startDate: null,
    present: false,
    endDate: null,
    descriptionText: "",
    description: []
  });

  // useEffect(() => {
  //   console.log('TEXT', localData.descriptionText);
  //   console.log('ARRAY', localData.description);
  // }, [localData.descriptionText, localData.description]);

  const handleChecked = () => {
    setLocalData((prev) => ({
      ...prev,
      present: !localData.present
    }));
  }

  const handleChange = (field, value) => {
    if (field === 'descriptionText') {
      const paragraphs = value.split("\n").map(p => p.trim()).filter(Boolean);

      setLocalData((prev) => ({
        ...prev,
        descriptionText: value,
        description: paragraphs
      }));

      return;
    };

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

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className='input-group'>
          <label htmlFor="title">
            <span>Title:</span>
          </label>
          <input
            type="text" 
            id="input-group" 
            placeholder='Ex. Project Manager'
            value={localData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            required />
        </div>

        <div className='input-group'>
          <label htmlFor="company_name">
            <span>Company: </span>
          </label>
          <input 
            type="text" 
            id="company_name" 
            placeholder='Ex. Meta'
            onChange={(e) => handleChange("companyName", e.target.value)}
            required />
        </div>

        <div className='input-group'>
          <label htmlFor="company_location">
            <span>Location:</span>
          </label>
          <input 
            type="text"
            id="company_location"
            placeholder='Ex. Los Angeles'
            onChange={(e) => handleChange("location", e.target.value)}
            required />
        </div>

        <div className='input-group'>
          <label htmlFor="company_start_date">
            <span>Start Date:</span>
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
          <label htmlFor="company_present">
            <span>Present</span>
          </label>
          <input
            type="checkbox"
            checked={localData.present}
            onChange={handleChecked}
            id="company_present"
          />
        </div>

        <div className='input-group'>
          <label htmlFor="company_end_date">
            <span>End Date:</span>
          </label>
          <div>
            <DatePicker
              selected={localData.endDate}
              onChange={(date) => handleChange("endDate", date)}
              dateFormat={"MM/dd/yyyy"}
              disabled={localData.present}
              placeholderText="MM/DD/YYYY"
              />
          </div>
        </div>
        
        <div className='input-group'>
          <label htmlFor="job_description">
            <span>Description:</span>
          </label>
          <textarea
            id="job_description"
            placeholder='Describe your role and achievements...'
            onChange={(e) => handleChange("descriptionText", e.target.value)}
            value={localData.descriptionText}
            />
        </div>

        <button type='submit'>Save</button>
      </form>
    </>
  )
}

export default Experience;
