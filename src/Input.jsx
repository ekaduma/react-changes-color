import React from 'react';
import colorNames from 'colornames';

const Input = ({ colorValue, setHexValue, setColorValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex justify-center mt-10 space-x-10">
      <input
        className="border border-black p-3 rounded-md"
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
      <button className="bg-blue-300 p-3 rounded-md font-semibold shadow-md hover:bg-blue-400 text-white" onClick={() => setIsDarkText(!isDarkText)}>
        Toogle Text Color
      </button>
    </form>
  );
};
export default Input;
