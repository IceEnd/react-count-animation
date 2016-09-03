import React, { Component, PropTypes } from 'react';
import '../style/main.css';

export default class CountRoll extends Component {
  static displayName = 'CountRoll';

  static propTypes = {
    start: PropTypes.number,
    count: PropTypes.number,
    duration: PropTypes.number,
    decimals: PropTypes.number,
  }
  constructor(props) {
    super(props);
    this.state = {
      value: parseFloat(this.props.start).toFixed(this.props.decimals),
      startTime: new Date().getTime(),
    };
  }

  componentWillMount() {

  }
  componentDidMount() {
  }

  render() {
    return (
      <div>234</div>
    );
  }
}
