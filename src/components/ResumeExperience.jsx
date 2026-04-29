import '../styles/ResumeExperience.scss';

export default function ResumeExperience( {experience : { companyName , location, startDate, endDate, title, description}}) {
  return (
    <>
      <div className='experience-container'>
        <div className='job-info'>
          <div className='company'>
            <p><b>{companyName}</b></p>
            <p>{location}</p>
          </div>
          <div className='dates'>
            <p>{startDate} - {endDate}</p>
          </div>
        </div>
        <p className='experience-title'>{title}</p>
        <ul>
          {description?.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
