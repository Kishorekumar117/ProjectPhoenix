// ComponentA.js
import React from 'react';

const ComponentA = ({ functionToCall }) => {
  return (
    <div>
      <button onClick={functionToCall}>Call Function</button>
    </div>
  );
};

export default ComponentA;
