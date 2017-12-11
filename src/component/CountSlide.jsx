import React, { Component, PropTypes } from 'react';
import { formatNumber, equalObject } from '../mod/utils';

export default class CountSlide extends Component {
  static displayName = 'CountSlide';

  static propTypes = {
    // start: PropTypes.number,
    count: PropTypes.number,
    duration: PropTypes.number,
    decimals: PropTypes.number,
    useGroup: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      arrayLi: formatNumber(this.props.count, this.props.decimals, this.props.useGroup).split(''),
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
    this.elLi = [];
  }

  componentWillMount() {
    const style = [];
    let li = {};
    this.state.arrayLi.forEach(() => {
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
    this.setInit();
    this.startAnimation();
  }

  componentWillReceiveProps(nextProps) {
    const propsUpdate = !equalObject(this.props, nextProps);
    if (propsUpdate) {
      this.elLi = [];
      this.clearTimer();
      const style = [];
      let li = {};
      this.state.arrayLi.forEach(() => {
        li = {
          left: '100%',
        };
        style.push(li);
      });
      this.setState({
        arrayLi: formatNumber(nextProps.count, nextProps.decimals, nextProps.useGroup).split(''),
        updateState: true,
        listStyle: style,
      });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  // }

  componentDidUpdate() {
    if (this.state.updateState) {
      this.setInit();
      this.startAnimation();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  /* 初始化 */
  setInit = () => {
    let width = 0;
    const position = [];
    const arrayClass = [];
    const listEl = this.ul.children;
    for (let i = 0, len = listEl.length; i < len; i++) {
      arrayClass.push(false);
      const li = listEl[i];
      if (i === 0) {
        position.push(li.offsetWidth / 2);
        width += (li.offsetWidth * 3) / 2;
      } else {
        position.push(width);
        width += li.offsetWidth;
      }
    }
    this.setState({
      ulStyle: {
        width: `${width}px`,
        height: `${listEl[0].offsetHeight}px`,
      },
      listPosition: position,
      listClass: arrayClass,
      updateState: false,
    });
  }

  /* 设置每个li的样式 */
  setLiStyle = (index, interval) => {
    const arrStyle = this.state.listStyle;
    const arrClass = this.state.listClass;
    arrStyle[index] = {
      transitionDuration: `${interval / 1000}s`,
      WebkitTransitionDuration: `${interval / 1000}s`,
      MozAnimationDirection: `${interval / 1000}s`,
      OTransitionDuration: `${interval / 1000}s`,
      left: `${this.state.listPosition[index]}px`,
    };
    if (index > 1 && index <= this.state.arrayLi.length) {
      arrClass[index - 2] = true;
    }
    this.setState({
      listStyle: arrStyle,
      listClass: arrClass,
    });
  }

  startAnimation = () => {
    const interval = this.props.duration / this.state.arrayLi.length;
    let index = 0;
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      if (index === this.state.arrayLi.length) {
        this.setLiStyle(index, interval);
        this.clearTimer();
      } else {
        this.setLiStyle(index, interval);
        index += 1;
      }
    }, interval);
  }

  clearTimer = () => {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return (
      <div className="count-slide-main">
        <ul
          className="count-slide-ul"
          style={{ ...this.state.ulStyle }}
          ref={node => (this.ul = node)}
        >
          {this.state.arrayLi.map((value, index) =>
            (<li
              className={
                `count-slide-li ${this.state.listClass[index] ? 'count-slide-li-tremble' : ''}`
              }
              style={{ ...this.state.listStyle[index] }}
            >
              {value}
            </li>),
          )}
        </ul>
      </div>
    );
  }
}
