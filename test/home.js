import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import AnimationCount from '../src/AnimationCount';

const settings = {
  start: 99923,
  count: 9999999,
  duration: 2000,
  decimals: 4,
  useGroup: true,
  animation: 'up',
};
const settings2 = {
  start: 1,
  count: 9999999,
  duration: 1000,
  decimals: 2,
  useGroup: true,
  animation: 'roll',
};
const settings3 = {
  start: 1,
  count: 9999999,
  duration: 2000,
  decimals: 2,
  useGroup: true,
  animation: 'slide',
};
render(
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
