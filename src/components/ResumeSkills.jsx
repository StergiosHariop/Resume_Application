import '../styles/ResumeSkills.scss';

export default function ResumeSkills({ skills, tools}) {

  return (
    <div className='skills'>
      <div className=''>
        <p className='technical'>
          <b>Technical Skills: </b>
          {skills.map((skill) => skill ? skill + ', ' : null)}
        </p>
      </div>
      <div className=''>
        <p className='tools'>
          <b>Tools: </b>
          {tools.map((tool) => tool ? tool + ', ' : null)}
        </p>
      </div>
    </div>
  )
};
