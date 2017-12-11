'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CountUp = require('./component/CountUp');

var _CountUp2 = _interopRequireDefault(_CountUp);

var _CountRoll = require('./component/CountRoll');

var _CountRoll2 = _interopRequireDefault(_CountRoll);

var _CountSlide = require('./component/CountSlide');

var _CountSlide2 = _interopRequireDefault(_CountSlide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimationCount = function (_Component) {
  _inherits(AnimationCount, _Component);

  function AnimationCount() {
    _classCallCheck(this, AnimationCount);

    return _possibleConstructorReturn(this, (AnimationCount.__proto__ || Object.getPrototypeOf(AnimationCount)).apply(this, arguments));
  }

  _createClass(AnimationCount, [{
    key: 'renderComponent',
    value: function renderComponent() {
      var setting = {
        start: this.props.start,
        count: this.props.count,
        duration: this.props.duration,
        decimals: this.props.decimals,
        useGroup: this.props.useGroup,
        animation: this.props.animation
      };
      switch (this.props.animation) {
        case 'up':
          return _react2.default.createElement(_CountUp2.default, setting);
        case 'roll':
          return _react2.default.createElement(_CountRoll2.default, setting);
        case 'slide':
          return _react2.default.createElement(_CountSlide2.default, setting);
        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderComponent();
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
  useGroup: _react.PropTypes.bool,
  animation: _react.PropTypes.string
};
var _default = AnimationCount;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AnimationCount, 'AnimationCount', 'src/AnimationCount.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/AnimationCount.jsx');
}();

;