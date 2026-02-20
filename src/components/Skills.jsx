import React, { useState } from 'react'

export default function Skills({ onSkillAdd, onSkillsAndToolsClear, onToolAdd}) {
  // const [skillList, setSkillList] = useState([]);
	const [inputSkill, setInputSkill] = useState('');
  const [inputTool, setInputTool] = useState('');

	const handleOnSubmitSkill = (e) => {
		e.preventDefault();
		setInputSkill('');
		onSkillAdd?.(inputSkill);
	}

  const handleOnSubmitTool = (e) => {
    e.preventDefault();
		setInputTool('');
		onToolAdd?.(inputTool);
  }

  return (
    <div>
      <form 
        onSubmit={handleOnSubmitSkill}>
        <input
          type='text' 
          value={inputSkill}
          placeholder='Ex: JavaScript..'
          onChange={(e) => setInputSkill(e.target.value)}>
        </input>
      </form>
      <p>Press -Enter- to add your skill</p>
      <form 
        onSubmit={handleOnSubmitTool}>
        <input
          type='text' 
          value={inputTool}
          placeholder='Ex: VSCode..'
          onChange={(e) => setInputTool(e.target.value)}>
        </input>
      </form>
      <p>Press -Enter- to add your tool</p>
      <button
        onClick={onSkillsAndToolsClear}
      >Clear Existing</button>
    </div>
  )
}
