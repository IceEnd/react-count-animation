import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import CountUp from './component/CountUp';
import CountRoll from './component/CountRoll';

const settings = {
  start: 10,
  count: 90999921.23,
  duration: 3000,
  decimals: 4,
  separator: true,
  useGroup: true,
}
render(
  <div>
    <h1>Count Animation</h1>
    <CountUp {...settings}/>
    <h1>Count Roll</h1>
    <CountRoll {...settings}/>
  </div>,
  document.getElementById('root')
);
