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
    };
  }

  render() {
    return (
      <div className="count-slide-main s">
        <ul className="count-slide-ul">
          {this.state.arryLi.map((value, index) =>
            (<li className="count-slide-li" key={index}>{value}</li>)
          )}
        </ul>
      </div>
    );
  }
}
