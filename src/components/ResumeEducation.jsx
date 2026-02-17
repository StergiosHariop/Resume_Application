import '../styles/ResumeEducation.scss';

const institute = {
  name: 'Harvard',
  location: 'Boston, MA, United States',
  startDate: '02/05/2020',
  endDate: '05/10/2025',
  degree: 'Computer Science',
  major: "Bachelor's Degree",
  gpa: '4.0'
}

export default function ResumeEducation() {
  return (
    <div className='education-container'>
      <div className='education-info'>
        <div className='institute'>
          <p><b>{institute.name}</b></p>
          <p>{institute.location}</p>
        </div>
        <div className='dates'>
          <p>{institute.startDate} - {institute.endDate}</p>
        </div>
      </div>
      <p className='major'>Major: {institute.degree} {institute.major}</p>
      <p className='gpa'>GPA: {institute.gpa}</p>
    </div>
  )
}
