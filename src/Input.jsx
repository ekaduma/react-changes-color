import React from 'react';
import colorNames from 'colornames';

const Input = ({ colorValue, setHexValue, setColorValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add color name: </label>
      <input
        autoFocus
        type="text"
        placeholder="add color"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button onClick={() => setIsDarkText(!isDarkText)}>Set Text Color</button>
    </form>
  );
};
export default Input;
