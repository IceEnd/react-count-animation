import React, { Component, PropTypes } from 'react';
import formatNumber from '../mod/Util';

export default class CountSlide extends Component {
  static displayName = 'CountSlide';

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
      arryLi: formatNumber(this.props.count, this.props.decimals, this.props.useGroup).split(''),
      ulStyle: {
        width: 'auto',
        height: 'auto',
      },
      listPosition: [],
      start: false,
      listStyle: [],
      listClass: [],
      updateState: false,
    };
  }
  componentWillMount() {
    const style = [];
    let li = {};
    this.state.arryLi.forEach(() => {
      li = {
        left: '100%',
      };
      style.push(li);
    });
    this.setState({
      listStyle: style,
    });
  }

  componentDidMount() {
    this.setInit(this.arrayLi);
    this.startAnimation();
  }

  componentWillReceiveProps() {
    this.clearTimer();
    this.setState({ updateState: true });
    const style = [];
    let li = {};
    this.state.arryLi.forEach(() => {
      li = {
        left: '100%',
      };
      style.push(li);
    });
    this.setState({
      listStyle: style,
    });
  }
  componentDidUpdate() {
    if (this.state.updateState) {
      this.setInit(this.arrayLi);
      this.startAnimation();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  /* 初始化 */
  setInit(arrayLi) {
    let width = 0;
    const position = [];
    const arrayClass = []
    arrayLi.forEach((li) => {
      position.push(width);
      arrayClass.push(false);
      width += li.offsetWidth;
    });
    this.setState({
      ulStyle: {
        width: `${width}px`,
        height: `${arrayLi[0].offsetHeight}px`,
      },
      listPosition: position,
      listClass: arrayClass,
    });
  }

  /* 设置每个li的样式 */
  setLiStyle(index, interval) {
    const arrStyle = this.state.listStyle;
    const arrClass = this.state.listClass;
    arrStyle[index] = {
      transitionDuration: `${interval / 1000}s`,
      WebkitTransitionDuration: `${interval / 1000}s`,
      MozAnimationDirection: `${interval / 1000}s`,
      OTransitionDuration: `${interval / 1000}s`,
      left: `${this.state.listPosition[index]}px`,
    };
    if (index > 1 && index <= this.state.arryLi.length) {
      arrClass[index - 2] = true;
    }
    this.setState({
      listStyle: arrStyle,
      listClass: arrClass,
    });
  }

  startAnimation() {
    const interval = this.props.duration / this.state.arryLi.length;
    let index = 0;
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      if (index === this.state.arryLi.length) {
        this.setLiStyle(index, interval);
        this.clearTimer();
      } else {
        this.setLiStyle(index, interval);
        index++;
      }
    }, interval);
  }

  clearTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    this.arrayLi = [];
    return (
      <div className="count-slide-main">
        <ul className="count-slide-ul" style={{ ...this.state.ulStyle }}>
          {this.state.arryLi.map((value, index) =>
            (<li
              className={
                `count-slide-li ${this.state.listClass[index] ? 'count-slide-li-tremble' : ''}`
              }
              key={index}
              style={{ ...this.state.listStyle[index] }}
              ref={(li) => { this.arrayLi.push(li); }}
            >
              {value}
            </li>)
          )}
        </ul>
      </div>
    );
  }
}
