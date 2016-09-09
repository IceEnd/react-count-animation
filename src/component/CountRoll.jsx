import React, { Component, PropTypes } from 'react';
import padStart from 'lodash/padStart';

export default class CountRoll extends Component {
  static displayName = 'CountRoll';

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
      value: this.formatNumber(this.props.start).split(''),
      end: this.formatNumber(this.props.count).split(''),
      startTime: new Date().getTime(),
    };
  }

  componentWillMount() {
  }
  componentDidMount() {
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  formatNumber(number) {
    let str = parseFloat(number).toFixed(this.props.decimals);
    if (this.props.useGroup && this.props.decimals >= 1) {
      let array1 = str.split('.')[0].split('').reverse().join('');
      const array2 = str.split('.')[1];
      array1 = array1.replace(/(\d{3})(?=[^$])/g, '$1,');
      array1 = array1.split('').reverse().join('');
      str = `${array1}.${array2}`;
    }
    return str;
  }
  renderValue(v, index) {
    if (v === ',' || v === '.') {
      return (
        <li className="count-roll-li" key={index}>
          <div className="count-roll-li-div">{v}</div>
        </li>
      );
    }
    return (
      <li className="count-roll-li" key={index}>{v}</li>
    );
  }
  render() {
    if (this.state.value.length <= 0) {
      return null;
    }
    return (
      <div className="count-roll-div">
        <ul className="count-roll-ul">
          {this.state.end.map((v, index) => (
            this.renderValue(v, index)
          ))}
        </ul>
      </div>
    );
  }
}
