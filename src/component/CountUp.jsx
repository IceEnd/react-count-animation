import React, { Component, PropTypes } from 'react';

export default class AnimationCount extends Component {
  static displayName = 'AnimationCount';

  static propTypes = {
    start: PropTypes.number,
    count: PropTypes.number,
    duration: PropTypes.number,
    decimals: PropTypes.number,
    useGroup: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.formatNumber(this.props.start),
      startTime: new Date().getTime(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const t = new Date().getTime() - this.state.startTime;
      const b = parseFloat(this.props.start).toFixed(this.props.decimals);
      const c = this.props.count.toFixed(this.props.decimals);
      const d = this.props.duration;
      let result;
      if (t < this.props.duration) {
        result = this.countUp(t, b, c, d);
      } else {
        result = this.formatNumber(this.props.count);
        clearInterval(this.timer);
      }
      this.setState({ value: result });
    }, 10);
  }

  countUp(t, b, c, d) {
    let result = parseFloat(((c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023) + b);
    result = this.formatNumber(result);
    return result;
  }
  formatNumber(number) {
    let str = parseFloat(number).toFixed(this.props.decimals);
    if (this.props.useGroup && this.props.decimals >= 1) {
      let array1 = str.split('.')[0].split('').reverse().join('');
      const array2 = str.split('.')[1];
      array1 = array1.replace(/(\d{3})/g, '$1,');
      array1 = array1.split('').reverse().join('');
      str = `${array1}.${array2}`;
    }
    return str;
  }

  render() {
    return (
      <div>{this.state.value}</div>
    );
  }
}
