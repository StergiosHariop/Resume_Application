import './styles/App.scss';
import Personal from './components/Personal.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Languages from './components/Languages.jsx';
import Resume from './components/Resume.jsx';
import { useState } from 'react';


function App() {
  const labels = [
    'Personal Information',
    'Experience',
    'Education',
    'Languages'
  ];

  const [languageValue, setLanguageValue] = useState(['English', 'French']);
  const [langFlag, setLangFlag] = useState(true);
  const [index, setIndex] = useState(0);
  const [label, setLable] = useState(0);

  const handleLanguagechange = (lang) => {

    if (langFlag) {
      setLangFlag(false);
      setLanguageValue([lang]);
    };

    setLanguageValue((prev) => {
      if (prev.includes(lang)) {
        return prev;
      };
      return  [...prev, lang]});
  }

  const handleClearExisting = () => {
    setLanguageValue([]);
  };

  const information = [
    <Personal />,
    <Experience />,
    <Education />,
    <Languages
      onLanguageChange={handleLanguagechange}
      onClearExisting={handleClearExisting}
     />
  ];

  const page = information[index];

  const nextPage = () => {
    setIndex((index) => (index + 1) % information.length);
    setLable(index + 1);
  };

    const backPage = () => {
    setIndex((index) => (index - 1 + information.length) % information.length);
        setLable(index - 1);
  };

  return (
    <div className='App'>
      <div className='header-container'>
        <h1>Resume Builder</h1>
      </div>
      <div className='app-wrapper'>
      <h2>{labels[label]}</h2>
        <div className='form-container'>
          {page}
          <div className='button-container'>
            {index > 0 && (<button 
              onClick={backPage}
            >Back</button>)}
            {index < 3 && (<button 
              onClick={nextPage}
            >Next</button>)}
          </div>
        </div>
        <Resume 
          language={languageValue}
        />
      </div>
    </div>
  )
}

export default App