import React, { useState } from 'react'

export default function Skills({ onSkillAdd, onToolAdd, onSkillsAndToolsClear}) {
	const [inputSkill, setInputSkill] = useState('');
  const [inputTool, setInputTool] = useState('');

	const handleSubmitSkill = (e) => {
		e.preventDefault();
		setInputSkill('');
		onSkillAdd?.(inputSkill);
	}

  const handleSubmitTool = (e) => {
    e.preventDefault();
		setInputTool('');
		onToolAdd?.(inputTool);
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmitSkill}>
        <input
          type='text' 
          value={inputSkill}
          placeholder='Ex: JavaScript..'
          onChange={(e) => setInputSkill(e.target.value)}>
        </input>
        <button type='submit'>Add Skill</button>
      </form>

      <form 
        onSubmit={handleSubmitTool}>
        <input
          type='text' 
          value={inputTool}
          placeholder='Ex: VSCode..'
          onChange={(e) => setInputTool(e.target.value)}>
        </input>
        <button type='submit'>Add Skill</button>
      </form>

      <button
        onClick={onSkillsAndToolsClear}
      >Clear Existing</button>
    </div>
  )
}
