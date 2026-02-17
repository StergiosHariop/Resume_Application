import '../styles/ResumeLanguages.scss';


export default function ResumeExperience({language}) {

  return (
    <div className='lang-container'>
      <ul>
        {language.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  )
}
