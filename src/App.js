import React from 'react';
import LeftSide from './components/leftSide';
import RightSide from './components/rightSide';

function App() {
  return (
    <div className='container mx-auto py-5'>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
