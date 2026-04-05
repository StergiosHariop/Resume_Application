import React from 'react'
import '../styles/ResumeHeader.scss';

export default function ResumeHeader() {
  return (
    <>
      <div className='resume-header'>
        <h2>John Doe</h2>
        <h4>Software Engineer</h4>
        <div className='info-container'>
          <p>New York,NY,10017</p>
          <p>+1 (217) 556 4367</p>
          <p>johndoe@test.com</p>
          <p><a href={'linkedin.com/john_doe'} style={{textDecoration: 'none'}}>linkedin.com/john_doe</a></p>
        </div>
      </div>
    </>
  )
}
