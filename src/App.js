import React from 'react';
import LeftSide from './components/leftSide';
import RightSide from './components/rightSide';

var subs = [
  {
      _id: 1,
      title: "Netflix",
      monthly: 13.67,
      payment: 24,
      color: "#ff0000"
  },
  {
      _id: 2,
      title: "Yandex",
      monthly: 233.68,
      payment: 3,
      color: "#00ff00"
  },
  {
      _id: 3,
      title: "Yandex",
      monthly: 1.68,
      payment: 3,
      color: "#00ff00"
  },
  {
      _id: 4,
      title: "Yandex",
      monthly: 27.68,
      payment: 3,
      color: "#00ff00"
  }
]

function App() {
  return (
    <div className='container mx-auto py-5'>
      <LeftSide subs={subs} />
      <RightSide subs={subs} />
    </div>
  );
}

export default App;
