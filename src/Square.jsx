import React from 'react';

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section className="border-dashed border rounded-md text-center w-96 mx-auto mt-20 p-5 font-semibold" style={{ backgroundColor: colorValue, color: isDarkText ? 'black' : 'white' }}>
      <p>{colorValue ? colorValue : 'Empty value'}</p>
      <p>{hexValue ? hexValue : '#'}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: 'Empty Value',
};

export default Square;
