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
  // const [mockFlag, setMockFlag] = useState(false);


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
    setSkillList((prev) => [...prev, value]);
  }

  const handleClearExistingSkills = () => {
    setSkillList([]);
  }

  // Components Array
  const components = [
    <Personal />,
    <Skills 
      onSkillAdd={handleSkillAdd}
      onSkillsClear={handleClearExistingSkills}
    />,
    <Experience />,
    <Education />,
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
        />
      </div>
    </div>
  )
}

export default App