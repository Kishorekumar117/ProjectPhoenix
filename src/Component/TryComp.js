// TryComp.js
import React from 'react';
import ComponentA from './ComponentA';

const TryComp = () => {
  const myFunction = () => {
    console.log('Function called from TryComp');
    // Do something...
  };

  return (
    <div>
      <h1>TryComp</h1>
      {/* Passing function as a prop to ComponentA */}
      <ComponentA functionToCall={myFunction} />
    </div>
  );
};

export default TryComp;
