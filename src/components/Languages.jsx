
function Languages() {
  const languages = [
    'English',
    'Chinese',
    'Hindi',
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
    <div className='experience-container'>
        <h2>Languages</h2>
        <select id="lang" name="languages">
          {languages.map((lang, index) => (
            <option key={index} value={lang}>{lang}</option>
          ))}
        </select>
    </div>
  )
}

export default Languages;
