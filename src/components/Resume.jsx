import React from 'react'
import '../styles/Resume.scss';
import '../components/ResumeHeader'
import ResumeHeader from '../components/ResumeHeader';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';

export default function Resume() {
  return (
    <div className='resume-container'>
      <ResumeHeader />
      <div className='resume-skills'>
        <h2>Professional Skills</h2>
        <hr />
        <ResumeSkills />
      </div>
      <div className='resume-experience'>
        <h2>Professional Experience</h2>
        <hr />
        <ResumeExperience />
      </div>
      <div className='resume-education'></div>
      <div className='resume-lang'></div>
    </div>
  )
}
