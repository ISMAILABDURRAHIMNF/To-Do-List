import { useState } from 'react'
import * as React from 'react'
import '../index.css'

export default function Nginput({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
  }

  return (
    <div className='nginput-div'>
        <input
            className='nginput-text'
            onChange={(e) => setInputValue(e.target.value)} 
            value={inputValue} 
            type='text' 
            placeholder='Write to do list....' 
            aria-label="Input field" 
        />
        <button className='nginput-btn' onClick={handleSubmit}>+</button>
    </div>
  )
}
