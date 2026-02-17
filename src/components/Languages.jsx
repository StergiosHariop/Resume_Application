import { useState } from "react";

function Languages({ onLanguageChange, onClearExisting }) {
  const [displayAddButton, setDisplayAddButton] = useState(true);
  const [displayLangSelection, setDisplayLangSelection] = useState(false);

  // Function that controls button displays
  const addLanguage = () => {
    setDisplayAddButton(false);
    setDisplayLangSelection(true);

  };

  // Language Selection Functionality
  const languageSelection = () => {
    const languageList = [
      '--',
      'English',
      'Chinese',
      'Hindu',
      'Spanish',
      'Greek',
      'French',
      'German',
      'Russian',
      'Korean',
      'Portuguese',
      'Italian',
      'Japanese'
    ];

    return (
      <select
        id="lang"
        name="languages"
        onChange={(e) => {
          if (e.target.value === '--') return;
          onLanguageChange(e.target.value)
          setDisplayAddButton(true);
          setDisplayLangSelection(false);
        }}
        >
        {languageList.map((lang, index) => (
          <option
            key={index}
          >
          {lang}
          </option>
        ))}
      </select>
    )
  };


  return (
    <>
    <div className='button-container'>
      {displayAddButton && (<button 
        onClick={addLanguage}
      >Add Language</button>)}
      <button
      onClick={onClearExisting}
      >Clear Existing</button>
    </div>
      {displayLangSelection && languageSelection()}
    </>
  )
}

export default Languages;
