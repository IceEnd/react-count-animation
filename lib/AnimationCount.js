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

var _CountUp = require('./component/CountUp');

var _CountUp2 = _interopRequireDefault(_CountUp);

var _CountRoll = require('./component/CountRoll');

var _CountRoll2 = _interopRequireDefault(_CountRoll);

require('../style/main.css');

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
  filename: 'src/AnimationCount.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/AnimationCount.jsx',
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
          return _react3.default.createElement(_CountUp2.default, setting);
        case 'roll':
          return _react3.default.createElement(_CountRoll2.default, setting);
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
}(_react2.Component), _class.displayName = 'AnimationCount', _class.propTypes = {
  start: _react2.PropTypes.number,
  count: _react2.PropTypes.number,
  duration: _react2.PropTypes.number,
  decimals: _react2.PropTypes.number,
  useGroup: _react2.PropTypes.bool,
  animation: _react2.PropTypes.string
}, _temp));

exports.default = AnimationCount;