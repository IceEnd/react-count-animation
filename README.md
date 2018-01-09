# react-count-animation

[![npm](https://img.shields.io/badge/npm-v1.1.3-brightgreen.svg)](https://www.npmjs.com/package/react-count-animation)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/IceEnd/icePlayer/blob/master/LICENSE)

Using TWEEN algorithm, digital animation based on react.

## Display
![display](http://obukb5fdy.bkt.clouddn.com/countanimation.gif)

## Install
```markdown
npm install react-count-animation@latest
```

## How to use

import stylesheet:

```js
import 'react-count-animation/dist/count.min.css';
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import AnimationCount from 'react-count-animation';

const Count = () => {
  const settings = {
    start: 99923,
    count: 9999999,
    duration: 3000,
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
    duration: 3000,
    decimals: 2,
    useGroup: true,
    animation: 'slide',
  };
  return (
    <div>
      <h1 className="title">Count Animation</h1>
      <div className="exam-div">
        <AnimationCount {...settings}/>
      </div>
      <h1 className="title">Count Roll</h1>
      <div className="exam-div">
        <AnimationCount {...settings2}/>
      </div>
      <h1 className="title">Count Slide</h1>
      <div className="exam-div">
        <AnimationCount {...settings3} />
      </div>
    </div>
  );
}

export default Count;
```

## Options
Property           | Type                  | Description
-------------      | -------------        | -------------
start                 | Number             | Initial value
count               | Number             | target value
duration           | Number             | Animation time length, in milliseconds
decimals          | Number             | decimals
useGroup         | bool                  |  Whether to use ',' the number of segments
animation         | string                |  Animation effects: <br> 'up' => 'CountUp';<br>'roll' => 'CountRoll'<br>'slide' => 'CountSlide'

## License

[MIT](https://github.com/IceEnd/react-count-animation/blob/master/LICENSE)
