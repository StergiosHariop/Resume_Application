import React, { useState } from 'react'

export default function Skills({ onSkillAdd, onSkillsClear }) {
  // const [skillList, setSkillList] = useState([]);
	const [inputValue, setInputValue] = useState('');



	const handleOnSubmit = (e) => {
		e.preventDefault();
		setInputValue('');
		onSkillAdd?.(inputValue);
	}

  return (
    <div>
			<form 
				onSubmit={handleOnSubmit}
				>
				<input
					type='text' 
					value={inputValue}
					placeholder='Ex: JavaScript..'
					onChange={(e) => setInputValue(e.target.value)}
				></input>
			</form>
      <p>Press -Enter- to add your skill</p>
			<button
				onClick={onSkillsClear}
			>Clear Existing</button>
    </div>
  )
}
