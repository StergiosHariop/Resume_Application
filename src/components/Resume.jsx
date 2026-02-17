import React from 'react'
import '../styles/Resume.scss';
import '../components/ResumeHeader'
import ResumeHeader from '../components/ResumeHeader';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';
import ResumeEducation from './ResumeEducation';
import ResumeLanguages from './ResumeLanguages';
import ResumeAdditional from './ResumeAdditional';

export default function Resume({language}) {
  return (
    <div className='resume-container'>
      <ResumeHeader />
      <div className='sections-container'>
        <div className='section'>
          <h2>Professional Skills</h2>
          <hr />
          <ResumeSkills />
        </div>
        <div className='section'>
          <h2>Professional Experience</h2>
          <hr />
          <ResumeExperience />
        </div>
        <div className='section'>
          <h2>Additional Experience</h2>
          <hr />
          <ResumeAdditional />
        </div>
        <div className='section'>
          <h2>Education</h2>
          <hr />
          <ResumeEducation />
        </div>
        <div className='section'>
          <h2>Languages</h2>
          <hr />
          <ResumeLanguages 
            language = {language}
          />
        </div>
      </div>
    </div>
  )
}
