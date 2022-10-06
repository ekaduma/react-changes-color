import React from 'react';

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section style={{ backgroundColor: colorValue, color: isDarkText ? 'black' : 'white' }}>
      <p>{colorValue ? colorValue : 'Empty value'}</p>
      <p>{hexValue ? hexValue : '#'}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: 'Empty Value',
};

export default Square;
