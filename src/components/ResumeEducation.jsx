import '../styles/ResumeEducation.scss';

export default function ResumeEducation({education: { name, location, startDate, endDate, degree, major, gpa }}) {

  return (
    <div className='education-container'>
      <div className='education-info'>
        <div className='institute'>
          <p><b>{name}</b></p>
          <p>{location}</p>
        </div>
        <div className='dates'>
          <p>{startDate} - {endDate}</p>
        </div>
      </div>
      <p className='major'>{degree}, {major}</p>
      <p className='gpa'>GPA: {gpa}</p>
    </div>
  )
};

