import './styles/App.scss';
import Personal from './components/Personal.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Languages from './components/Languages.jsx';
import Resume from './components/Resume.jsx';
import { useState } from 'react';
import Skills from './components/Skills.jsx';


function App() {
  const labels = [
    'Personal Information',
    'Skills',
    'Experience',
    'Education',
    'Languages'
  ];

  const [languageValues, setLanguageValues] = useState(['English', 'French']);
  const [langFlag, setLangFlag] = useState(true);
  const [index, setIndex] = useState(0);
  const [hasUserAddedSkill, setHasUserAddedSkill] = useState(false);
  const [hasUserAddedtool, setHasUserAddedToll] = useState(false);
  const [skillList, setSkillList] = useState([
    'JavaScript',
    'HTML',
    'CSS',
    'React.js',
    'Angular',
    'Vite',
    'SQL',
    '.NET',
    'Sass',
    'Tailwind CSS'
  ]);
  const [toolsList, setToolsList] = useState([
    'VSCode',
    'Figma',
    'Jira',
    'Adobe Suite'
  ]);
  const [education, setEducation] = useState({
    name: 'Harvard',
    location: 'Boston, MA, United States',
    startDate: '02/05/2020',
    endDate: '05/10/2025',
    degree: "Bachelor's Degree",
    major: "Computer Science",
    gpa: '4.0'
  });

  const [experience, setExperience] = useState({
    companyName: 'Meta',
    location: 'New York, NY, United States',
    startDate: '02/05/2020',
    endDate: '05/10/2025',
    title: 'Software Engineer',
    descriptionText: '',
    description: [
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.'
    ]
  });

  // Handle Language Changes from user
  const handleLanguagechange = (lang) => {
    if (langFlag) {
      setLangFlag(false);
      setLanguageValues([lang]);
    };

    setLanguageValues((prev) => {
      if (prev.includes(lang)) {
        return prev;
      };
      return  [...prev, lang]});
  }

  // Clears Existing Language List
  const handleClearExisting = () => {
    setLanguageValues([]);
  };

  // Handle Skill Addition
  const handleSkillAdd = (value) => {
    if (!hasUserAddedSkill) {
      setSkillList([]);
      setHasUserAddedSkill(true);
    }
    setSkillList((prev) => [...prev, value]);
  };

  const handleClearExistingSkillsAndTools = () => {
    setSkillList([]);
    setToolsList([]);
  };

  const handleToolAdd = (value) => {
    if (!hasUserAddedtool) {
      setToolsList([]);
      setHasUserAddedToll(true);
    }
    setToolsList((prev) => [...prev, value]);
  };

  const updateExperience = (field, newData) => {
    setExperience((prev) => ({
      ...prev,
      [field]: newData
    }));
  }

  const updateEducation = (field, newData) => {
    setEducation((prev) => ({
      ...prev,
      [field]: newData
    }));
  };

  // Components Array
  const components = [
    <Personal />,
    <Skills 
      onSkillAdd={handleSkillAdd}
      onToolAdd={handleToolAdd}
      onSkillsAndToolsClear={handleClearExistingSkillsAndTools}
    />,
    <Experience
      onSave={updateExperience}
    />,
    <Education 
      onSave={updateEducation}
    />,
    <Languages
      onLanguageChange={handleLanguagechange}
      onClearExisting={handleClearExisting}
     />
  ];

  const nextPage = () => {
    setIndex((index) => (index + 1) % components.length);
  };

  const backPage = () => {
    setIndex((index) => (index - 1 + components.length) % components.length);
  };

  return (
    <div className='App'>
      <div className='header-container'>
        <h1>Resume Builder</h1>
      </div>
      <div className='app-wrapper'>
      <h2>{labels[index]}</h2>
        <div className='form-container'>
          {components[index]}
          <div className='button-container'>
            {index > 0 && (<button 
              onClick={backPage}
            >Back</button>)}
            {index < 4 && (<button 
              onClick={nextPage}
            >Next</button>)}
          </div>
        </div>
        <Resume 
          language={languageValues}
          skills={skillList}
          tools={toolsList}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  )
}

export default App