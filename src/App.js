import React from 'react';
import LeftSide from './components/leftSide';
import RightSide from './components/rightSide';

var subs = [
  {
      _id: 1,
      title: "Netflix",
      monthly: 13.67,
      payment: 24,
      color: "red"
  },
  {
      _id: 2,
      title: "Yandex.Music",
      monthly: 3.68,
      payment: 3,
      color: "amber"
  },
  {
      _id: 3,
      title: "Youtube+",
      monthly: 1.68,
      payment: 3,
      color: "red"
  },
  {
      _id: 4,
      title: "VK.Music",
      monthly: 27.68,
      payment: 3,
      color: "sky"
  }
]

function App() {
  return (
    <div className='container mx-auto py-5'>
      <LeftSide />
      <RightSide subs={subs} />
    </div>
  );
}

export default App;
