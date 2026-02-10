import '../styles/ResumeSkills.scss';

export default function ResumeSkills() {
  //testing array
  const test = ['JavaScript',
    'HTML',
    'CSS',
    'React.js',
    'Angular',
    'Vite',
    'SQL',
    '.NET',
    'Sass',
    'Tailwind CSS'
  ];

  const tools = [
    'VSCode',
    'Figma',
    'Jira',
    'Adobe Suite'
  ]

  return (
    <div className='skills'>
      <div className=''>
        <p className='technical'><b>Technical Skills:</b> {test.map((skill) => skill + ', ')}</p>
      </div>
      <div className=''>
        <p className='tools'><b>Tools:</b> {tools.map((skill) => skill + ', ')}</p>
      </div>
    </div>
  )
}
