import '../styles/ResumeSkills.scss';

export default function ResumeSkills({ skills, tools}) {

  // const tools = [
  //   'VSCode',
  //   'Figma',
  //   'Jira',
  //   'Adobe Suite'
  // ]


  return (
    <div className='skills'>
      <div className=''>
        <p className='technical'>
          <b>Technical Skills: </b> 
          {/* {(skills.length ? skills : skillsMock).map((skill) => skill + ', ')} */}
          {skills.map((skill) => skill + ', ')}
        </p>
      </div>
      <div className=''>
        <p className='tools'>
          <b>Tools: </b> 
          {/* {tools.map((skill) => skill + ', ')} */}
          {tools.map((tool) => tool + ', ')}
        </p>
      </div>
    </div>
  )
}
