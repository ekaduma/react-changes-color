import React from 'react';
import colorNames from 'colornames';

const Input = ({ colorValue, setHexValue, setColorValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex justify-center mt-20 space-x-10">
      <input
        className="bg-blue-200 p-3 rounded-md shadow-md"
        autoFocus
        type="text"
        placeholder="Add Color"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button className="bg-blue-200 p-3 rounded-md shadow-md font-semibold" onClick={() => setIsDarkText(!isDarkText)}>
        Toogle Text Color
      </button>
    </form>
  );
};
export default Input;
