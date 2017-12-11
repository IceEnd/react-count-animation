import React, { Component } from 'react';
import AnimationCount from '../src/AnimationCount';

export default class Home extends Component {
  static displayName = 'Home';

  constructor() {
    super();
    this.state = {
      settings: [
        {
          start: 99923,
          count: 9999999,
          duration: 2000,
          decimals: 0,
          useGroup: true,
          animation: 'up',
        },
        {
          start: 1,
          count: 9999999,
          duration: 2000,
          decimals: 2,
          useGroup: true,
          animation: 'roll',
        },
        {
          start: 1,
          count: 9999999,
          duration: 3000,
          decimals: 1,
          useGroup: true,
          animation: 'slide',
        },
      ],
    };
  }

  handleClick = (key) => {
    const setting = this.state.settings[key];
    setting.start = setting.start + 1;
    const settings = this.state.settings;
    settings[key] = setting;
    this.setState({
      settings,
    });
  }

  render() {
    const { settings } = this.state;
    return (
      <div>
        <h1 className="title">Count Up</h1>
        <div className="exam-div">
          <AnimationCount {...settings[0]} />
        </div>
        <h1 className="title">Count Roll</h1>
        <div className="exam-div">
          <AnimationCount {...settings[1]} />
        </div>
        <h1 className="title">Count Slide</h1>
        <div className="exam-div">
          <AnimationCount {...settings[2]} />
        </div>
        <h1 onClick={() => this.handleClick(0)}>click1</h1>
        <h1 onClick={() => this.handleClick(1)}>click2</h1>
        <h1 onClick={() => this.handleClick(2)}>click3</h1>
      </div>
    );
  }
}
