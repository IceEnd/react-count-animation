import 'babel-polyfill';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import AnimationCount from '../src/AnimationCount';

import '../style/count.css';

const render = () => {
  const settings = {
    start: 99923,
    count: 9999999,
    duration: 2000,
    decimals: 3,
    useGroup: true,
    animation: 'up',
  };
  const settings2 = {
    start: 1,
    count: 9999999,
    duration: 2000,
    decimals: 2,
    useGroup: true,
    animation: 'roll',
  };
  const settings3 = {
    start: 1,
    count: 9999999,
    duration: 3000,
    decimals: 2,
    useGroup: true,
    animation: 'slide',
  };
  ReactDOM.render(
    <div>
      <h1 className="title">Count Up</h1>
      <div className="exam-div">
        <AnimationCount {...settings} />
      </div>
      <h1 className="title">Count Roll</h1>
      <div className="exam-div">
        <AnimationCount {...settings2} />
      </div>
      <h1 className="title">Count Slide</h1>
      <div className="exam-div">
        <AnimationCount {...settings3} />
      </div>
    </div>,
    document.getElementById('root')
  );
}

render(AnimationCount);

if (module.hot) {
  module.hot.accept('../src/index', () => {
    const newApp = require('../src/index').default;
    render(newApp);
  });
}
