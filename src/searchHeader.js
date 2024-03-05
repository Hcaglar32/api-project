import React from "react";
import { useState } from "react";

function SearchHeader({search}) {
  const [valueInput, SetvalueInput] = useState('');
  const handleChange = (event) => {
    SetvalueInput(event.target.value) 
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input type="text" value={valueInput} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchHeader