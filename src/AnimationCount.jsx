import React, { Component, PropTypes } from 'react';
import CountUp from './component/CountUp';
import CountRoll from './component/CountRoll';
import CountSlide from './component/CountSlide';

export default class AnimationCount extends Component {
  static displayName = 'AnimationCount';

  static propTypes = {
    start: PropTypes.number,
    count: PropTypes.number,
    duration: PropTypes.number,
    decimals: PropTypes.number,
    useGroup: PropTypes.bool,
    animation: PropTypes.string,
  }

  renderComponent() {
    const setting = {
      start: this.props.start,
      count: this.props.count,
      duration: this.props.duration,
      decimals: this.props.decimals,
      useGroup: this.props.useGroup,
      animation: this.props.animation,
    };
    switch (this.props.animation) {
      case 'up':
        return (<CountUp {...setting} />);
      case 'roll':
        return (<CountRoll {...setting} />);
      case 'slide':
        return (<CountSlide {...setting} />);
      default:
        return null;
    }
  }
  render() {
    return this.renderComponent();
  }
}
