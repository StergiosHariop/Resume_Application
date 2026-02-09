import React from 'react'
import '../styles/Resume.scss';
import '../components/ResumeHeader'
import ResumeHeader from '../components/ResumeHeader';
import ResumeExperience from './ResumeExperience';

export default function Resume() {
  return (
    <div className='resume-container'>
      <ResumeHeader />
      <ResumeExperience />
      <div className='resume-education'></div>
      <div className='resume-lang'></div>
    </div>
  )
}
