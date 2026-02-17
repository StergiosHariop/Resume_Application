import '../styles/ResumeAdditional.scss';

const company = {
  name: 'Freelance',
  location: 'Remote',
  startDate: '02/05/2020',
  endDate: '05/10/2025',
  title: 'UI Developer'
}

export default function ResumeAdditional() {
  return (
    <>
      <div className='experience-container'>
        <div className='job-info'>
          <div className='company'>
            <p><b>{company.name}</b></p>
            <p>{company.location}</p>
          </div>
          <div className='dates'>
            <p>{company.startDate} - {company.endDate}</p>
          </div>
        </div>
        <p className='experience-title'>{company.title}</p>
        <ul>
          <li>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</li>
          <li>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.</li>
          <li>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</li>
          <li>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</li>
          <li>Lorem ipsum is placeholder text commonly used in the graphic.</li>
        </ul>
      </div>
    </>
  )
}
