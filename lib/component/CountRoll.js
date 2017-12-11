'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../mod/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountRoll = function (_Component) {
  _inherits(CountRoll, _Component);

  function CountRoll(props) {
    _classCallCheck(this, CountRoll);

    var _this = _possibleConstructorReturn(this, (CountRoll.__proto__ || Object.getPrototypeOf(CountRoll)).call(this, props));

    _this.getAllCount = function () {
      return _this.__getAllCount__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.setInit = function () {
      return _this.__setInit__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.setAnimationStyle = function () {
      return _this.__setAnimationStyle__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.startAnimation = function () {
      return _this.__startAnimation__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.restartAnimation = function () {
      return _this.__restartAnimation__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.countUp = function () {
      return _this.__countUp__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      valueStart: (0, _utils.formatNumber)(_this.props.start, _this.props.decimals, _this.props.useGroup),
      height: 'auto',
      animationStyle: _this.setAnimationStyle(0, false),
      arrayLi: []
    };
    return _this;
  }

  _createClass(CountRoll, [{
    key: '__countUp__REACT_HOT_LOADER__',
    value: function __countUp__REACT_HOT_LOADER__() {
      return this.__countUp__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__restartAnimation__REACT_HOT_LOADER__',
    value: function __restartAnimation__REACT_HOT_LOADER__() {
      return this.__restartAnimation__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__startAnimation__REACT_HOT_LOADER__',
    value: function __startAnimation__REACT_HOT_LOADER__() {
      return this.__startAnimation__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__setAnimationStyle__REACT_HOT_LOADER__',
    value: function __setAnimationStyle__REACT_HOT_LOADER__() {
      return this.__setAnimationStyle__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__setInit__REACT_HOT_LOADER__',
    value: function __setInit__REACT_HOT_LOADER__() {
      return this.__setInit__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__getAllCount__REACT_HOT_LOADER__',
    value: function __getAllCount__REACT_HOT_LOADER__() {
      return this.__getAllCount__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getAllCount();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var maxHeight = this.elementLi.offsetHeight;
      var _props = this.props,
          start = _props.start,
          decimals = _props.decimals,
          useGroup = _props.useGroup;

      this.setInit(maxHeight, start, decimals, useGroup);
      this.startAnimation();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var propsUpdate = !(0, _utils.equalObject)(this.props, nextProps);
      var stateUpdate = !(0, _utils.equalObject)(this.state, nextState);
      if (propsUpdate) {
        var start = nextProps.start,
            decimals = nextProps.decimals,
            useGroup = nextProps.useGroup;

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

  }, {
    key: '__getAllCount__REACT_HOT_LOADER__',


    /* 初始化 */
    value: function __getAllCount__REACT_HOT_LOADER__() {
      var t = 0;
      var result = void 0;
      var arr = [];
      var c = this.props.count - this.props.start;
      var b = this.props.start;
      var d = this.props.duration;
      var temp = d / 19;
      for (var i = 0; i < 19; i += 1) {
        t += temp;
        if (t < this.props.duration) {
          result = this.countUp(t, b, c, d);
        } else {
          result = (0, _utils.formatNumber)(this.props.count, this.props.decimals, this.props.useGroup);
        }
        arr.unshift(result);
      }
      this.setState({ arrayLi: arr });
    }
  }, {
    key: '__setInit__REACT_HOT_LOADER__',


    /* 设置Style */
    value: function __setInit__REACT_HOT_LOADER__(maxHeight, start, decimals, useGroup) {
      this.setState({
        height: maxHeight,
        animationStyle: this.setAnimationStyle(maxHeight * 19, true),
        valueStart: (0, _utils.formatNumber)(start, decimals, useGroup)
      });
    }
  }, {
    key: '__setAnimationStyle__REACT_HOT_LOADER__',


    /* 开始动画 */
    value: function __setAnimationStyle__REACT_HOT_LOADER__(height, reset) {
      return {
        transitionDuration: reset ? '0s' : this.props.duration / 1000 + 's',
        WebkitTransitionDuration: reset ? '0s' : this.props.duration / 1000 + 's',
        MozAnimationDirection: reset ? '0s' : this.props.duration / 1000 + 's',
        OTransitionDuration: reset ? '0s' : this.props.duration / 1000 + 's',
        transform: 'translate3d(0, -' + height + 'px, 0)',
        WebkitTransform: 'translate3d(0, -' + height + 'px, 0)',
        MozTransform: 'translate3d(0, -' + height + 'px, 0)',
        OTransform: 'translate3d(0, -' + height + 'px, 0)'
      };
    }
  }, {
    key: '__startAnimation__REACT_HOT_LOADER__',


    /* 重新开始 */
    value: function __startAnimation__REACT_HOT_LOADER__() {
      var _this2 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(function () {
        _this2.setState({ animationStyle: _this2.setAnimationStyle(0, false) });
      }, 200);
    }
  }, {
    key: '__restartAnimation__REACT_HOT_LOADER__',
    value: function __restartAnimation__REACT_HOT_LOADER__() {
      this.setState({ animationStyle: this.setAnimationStyle(this.state.height * 19, true) });
      this.startAnimation();
    }
  }, {
    key: 'componentWillUnmout',
    value: function componentWillUnmout() {
      clearTimeout(this.timer);
    }

    /**
     * tween Qunit easeOut
     */

  }, {
    key: '__countUp__REACT_HOT_LOADER__',
    value: function __countUp__REACT_HOT_LOADER__(t, b, c, d) {
      var _props2 = this.props,
          decimals = _props2.decimals,
          useGroup = _props2.useGroup;

      var temp = t / d - 1;
      var result = c * (Math.pow(temp, 5) + 1) + b;
      return (0, _utils.formatNumber)(result, decimals, useGroup);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          className: 'count-roll-main',
          style: { height: this.state.height }
        },
        _react2.default.createElement(
          'ul',
          {
            className: 'count-roll-ul',
            style: _extends({}, this.state.animationStyle)
          },
          this.state.arrayLi.map(function (value) {
            return _react2.default.createElement(
              'li',
              null,
              value
            );
          }),
          _react2.default.createElement(
            'li',
            {
              className: 'count-roll-li',
              ref: function ref(li) {
                return _this3.elementLi = li;
              }
            },
            this.state.valueStart
          )
        )
      );
    }
  }]);

  return CountRoll;
}(_react.Component);

CountRoll.displayName = 'CountRoll';
CountRoll.propTypes = {
  start: _react.PropTypes.number,
  count: _react.PropTypes.number,
  duration: _react.PropTypes.number,
  decimals: _react.PropTypes.number,
  useGroup: _react.PropTypes.bool
};
var _default = CountRoll;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CountRoll, 'CountRoll', 'src/component/CountRoll.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/component/CountRoll.jsx');
}();

;