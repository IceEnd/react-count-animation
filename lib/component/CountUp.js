'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../mod/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimationCount = function (_Component) {
  _inherits(AnimationCount, _Component);

  function AnimationCount(props) {
    _classCallCheck(this, AnimationCount);

    var _this = _possibleConstructorReturn(this, (AnimationCount.__proto__ || Object.getPrototypeOf(AnimationCount)).call(this, props));

    _this.setTimer = function () {
      return _this.__setTimer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.clearTimer = function () {
      return _this.__clearTimer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.countUp = function () {
      return _this.__countUp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      value: (0, _utils.formatNumber)(_this.props.start, _this.props.decimals, _this.props.useGroup),
      startTime: new Date().getTime()
    };
    return _this;
  }

  _createClass(AnimationCount, [{
    key: '__countUp__REACT_HOT_LOADER__',
    value: function __countUp__REACT_HOT_LOADER__() {
      return this.__countUp__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__clearTimer__REACT_HOT_LOADER__',
    value: function __clearTimer__REACT_HOT_LOADER__() {
      return this.__clearTimer__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__setTimer__REACT_HOT_LOADER__',
    value: function __setTimer__REACT_HOT_LOADER__() {
      return this.__setTimer__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTimer();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var propsFlag = !(0, _utils.equalObject)(this.props, nextProps);
      if (propsFlag) {
        this.setState({
          value: (0, _utils.formatNumber)(this.props.start),
          startTime: new Date().getTime()
        });
        this.clearTimer();
        this.setTimer();
        return true;
      }
      var stateFlag = !(0, _utils.equalObject)(this.state, nextState);
      if (stateFlag) {
        return true;
      }
      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: '__setTimer__REACT_HOT_LOADER__',
    value: function __setTimer__REACT_HOT_LOADER__() {
      var _this2 = this;

      if (this.timer) {
        return;
      }
      this.timer = setInterval(function () {
        var t = new Date().getTime() - _this2.state.startTime;
        var b = _this2.props.start;
        var c = _this2.props.count - _this2.props.start;
        var d = _this2.props.duration;
        var result = void 0;
        if (t < _this2.props.duration) {
          result = _this2.countUp(t, b, c, d);
        } else {
          result = (0, _utils.formatNumber)(_this2.props.count, _this2.props.decimals, _this2.props.useGroup);
          clearInterval(_this2.timer);
        }
        _this2.setState({ value: result });
      }, 10);
    }
  }, {
    key: '__clearTimer__REACT_HOT_LOADER__',
    value: function __clearTimer__REACT_HOT_LOADER__() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: '__countUp__REACT_HOT_LOADER__',
    value: function __countUp__REACT_HOT_LOADER__(t, b, c, d) {
      var result = parseFloat(c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b);
      result = (0, _utils.formatNumber)(result, this.props.decimals, this.props.useGroup);
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.value
      );
    }
  }]);

  return AnimationCount;
}(_react.Component);

AnimationCount.displayName = 'AnimationCount';
AnimationCount.propTypes = {
  start: _react.PropTypes.number,
  count: _react.PropTypes.number,
  duration: _react.PropTypes.number,
  decimals: _react.PropTypes.number,
  useGroup: _react.PropTypes.bool
};
var _default = AnimationCount;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AnimationCount, 'AnimationCount', 'src/component/CountUp.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/component/CountUp.jsx');
}();

;