# react-count-animation

[![npm](https://img.shields.io/badge/npm-v1.1.0-brightgreen.svg)](https://www.npmjs.com/package/react-count-animation)

Using TWEEN algorithm, digital animation based on react.

## Display
![display](http://obukb5fdy.bkt.clouddn.com/countanimation.gif)

## Install
```markdown
npm install react-count-animation@latest
```

## How to use

add stylesheet:

```html
<link rel='stylesheet href="http://about.coolecho.net/common/count.min.css" />
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
