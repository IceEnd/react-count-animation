import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import CountUp from './component/CountUp';
import CountRoll from './component/CountRoll';

import './style/main.css';

const settings = {
  start: 99923,
  count: 9999999,
  duration: 3000,
  decimals: 4,
  separator: true,
  useGroup: true,
}
const settings2 = {
  start: 0,
  count: 9999999,
  duration: 3000,
  decimals: 2,
  separator: true,
  useGroup: true,
}
render(
  <div>
    <h1 className="title">Count Animation</h1>
    <div className="exam-div">
      <CountUp {...settings}/>
    </div>
    <h1 className="title">Count Roll</h1>
    <div className="exam-div">
      <CountRoll {...settings2}/>
    </div>
  </div>,
  document.getElementById('root')
);
