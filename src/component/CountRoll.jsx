import React, { Component, PropTypes } from 'react';
import { formatNumber, equalObject } from '../mod/utils';

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
      valueStart: formatNumber(this.props.start, this.props.decimals, this.props.useGroup),
      height: 'auto',
      animationStyle: this.setAnimationStyle(0, false),
      arrayLi: [],
    };
  }

  componentWillMount() {
    this.getAllCount();
  }

  componentDidMount() {
    const maxHeight = this.elementLi.offsetHeight;
    const { start, decimals, useGroup } = this.props;
    this.setInit(maxHeight, start, decimals, useGroup);
    this.startAnimation();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const propsUpdate = !equalObject(this.props, nextProps);
    const stateUpdate = !equalObject(this.state, nextState);
    if (propsUpdate) {
      const { start, decimals, useGroup } = nextProps;
      this.setInit(this.state.height, start, decimals, useGroup);
      this.getAllCount();
      this.startAnimation();
      return true;
    }
    if (stateUpdate) {
      return true;
    }
    return false;
  }

  /* 计算数值 */
  getAllCount = () => {
    let t = 0;
    let result;
    const arr = [];
    const c = this.props.count - this.props.start;
    const b = this.props.start;
    const d = this.props.duration;
    const temp = d / 19;
    for (let i = 0; i < 19; i += 1) {
      t += temp;
      if (t < this.props.duration) {
        result = this.countUp(t, b, c, d);
      } else {
        result = formatNumber(this.props.count, this.props.decimals, this.props.useGroup);
      }
      arr.unshift(result);
    }
    this.setState({ arrayLi: arr });
  }

  /* 初始化 */
  setInit = (maxHeight, start, decimals, useGroup) => {
    this.setState({
      height: maxHeight,
      animationStyle: this.setAnimationStyle(maxHeight * 19, true),
      valueStart: formatNumber(start, decimals, useGroup),
    });
  }

  /* 设置Style */
  setAnimationStyle = (height, reset) => ({
    transitionDuration: reset ? '0s' : `${this.props.duration / 1000}s`,
    WebkitTransitionDuration: reset ? '0s' : `${this.props.duration / 1000}s`,
    MozAnimationDirection: reset ? '0s' : `${this.props.duration / 1000}s`,
    OTransitionDuration: reset ? '0s' : `${this.props.duration / 1000}s`,
    transform: `translate3d(0, -${height}px, 0)`,
    WebkitTransform: `translate3d(0, -${height}px, 0)`,
    MozTransform: `translate3d(0, -${height}px, 0)`,
    OTransform: `translate3d(0, -${height}px, 0)`,
  });

  /* 开始动画 */
  startAnimation = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.timer = setTimeout(() => {
      this.setState({ animationStyle: this.setAnimationStyle(0, false) });
    }, 200);
  }

  /* 重新开始 */
  restartAnimation = () => {
    this.setState({ animationStyle: this.setAnimationStyle(this.state.height * 19, true) });
    this.startAnimation();
  }

  componentWillUnmout() {
    clearTimeout(this.timer);
  }

  /**
   * tween Qunit easeOut
   */
  countUp = (t, b, c, d) => {
    const { decimals, useGroup } = this.props;
    const temp = ((t / d) - 1);
    const result = (c * ((temp ** 5) + 1)) + b;
    return formatNumber(result, decimals, useGroup);
  }

  render() {
    return (
      <div
        className="count-roll-main"
        style={{ height: this.state.height }}
      >
        <ul
          className="count-roll-ul"
          style={{ ...this.state.animationStyle }}
        >
          {this.state.arrayLi.map(value =>
            (<li>{value}</li>),
          )}
          <li
            className="count-roll-li"
            ref={li => (this.elementLi = li)}
          >
            {this.state.valueStart}
          </li>
        </ul>
      </div>
    );
  }
}
