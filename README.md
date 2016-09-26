# react-count-animation
Using TWEEN algorithm, digital animation based on react.

## Display
![display](http://obukb5fdy.bkt.clouddn.com/countanimation.gif)

## Install
```markdown
npm install react-count-animation@latest
```

## How to use
```js
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import AnimationCount from 'react-count-animation';

const settings = {
  start: 99923,
  count: 9999999,
  duration: 3000,
  decimals: 4,
  useGroup: true,
  animation: 'up',
}
const settings2 = {
  start: 1,
  count: 9999999,
  duration: 1000,
  decimals: 2,
  useGroup: true,
  animation: 'roll',
}
render(
  <div>
    <h1 className="title">Count Animation</h1>
    <div className="exam-div">
      <AnimationCount {...settings}/>
    </div>
    <h1 className="title">Count Roll</h1>
    <div className="exam-div">
      <AnimationCount {...settings2}/>
    </div>
  </div>,
  document.getElementById('root')
);
```

## Options
Property           | Type                  | Description
-------------      | -------------        | -------------
start                 | Number             | Initial value
count               | Number             | target value
duration           | Number             | Animation time length, in milliseconds
decimals          | Number             | decimals
useGroup         | bool                  |  Whether to use ',' the number of segments
animation         | string                |  Animation effects:'up' => 'CountUp'; 'roll' => 'CountRoll'

## License

[MIT](https://github.com/IceEnd/react-count-animation/blob/master/LICENSE)
