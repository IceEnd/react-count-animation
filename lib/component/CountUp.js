'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('/Users/Cononico/GitHub/react-count-animation/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/Cononico/GitHub/react-count-animation/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/Cononico/GitHub/react-count-animation/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _Util = require('../mod/Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AnimationCount: {
    displayName: 'AnimationCount'
  }
};

var _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/component/CountUp.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/component/CountUp.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformHmrLibIndexJs2(_UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var AnimationCount = _wrapComponent('AnimationCount')((_temp = _class = function (_Component) {
  _inherits(AnimationCount, _Component);

  function AnimationCount(props) {
    _classCallCheck(this, AnimationCount);

    var _this = _possibleConstructorReturn(this, (AnimationCount.__proto__ || Object.getPrototypeOf(AnimationCount)).call(this, props));

    _this.state = {
      value: (0, _Util2.default)(_this.props.start, _this.props.decimals, _this.props.useGroup),
      startTime: new Date().getTime()
    };
    return _this;
  }

  _createClass(AnimationCount, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTimer();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        value: this.formatNumber(this.props.start),
        startTime: new Date().getTime()
      });
      this.clearTimer();
      this.setTimer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: 'setTimer',
    value: function setTimer() {
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
          result = (0, _Util2.default)(_this2.props.count, _this2.props.decimals, _this2.props.useGroup);
          clearInterval(_this2.timer);
        }
        _this2.setState({ value: result });
      }, 10);
    }
  }, {
    key: 'clearTimer',
    value: function clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: 'countUp',
    value: function countUp(t, b, c, d) {
      var result = parseFloat(c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b);
      result = (0, _Util2.default)(result, this.props.decimals, this.props.useGroup);
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        this.state.value
      );
    }
  }]);

  return AnimationCount;
}(_react2.Component), _class.displayName = 'AnimationCount', _class.propTypes = {
  start: _react2.PropTypes.number,
  count: _react2.PropTypes.number,
  duration: _react2.PropTypes.number,
  decimals: _react2.PropTypes.number,
  useGroup: _react2.PropTypes.bool
}, _temp));

exports.default = AnimationCount;