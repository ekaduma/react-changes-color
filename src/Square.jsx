import React from 'react';

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (

    <section className="mx-auto w-96 mt-20 border border-dashed text-center p-5 rounded-md font-semibold" style={{ backgroundColor: colorValue, color: isDarkText ? 'black' : 'white' }}>

      <p>{colorValue ? colorValue : 'Empty value'}</p>
      <p>{hexValue ? hexValue : '#'}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: 'Empty Value',
};

export default Square;
