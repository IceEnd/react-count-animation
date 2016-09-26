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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _Util = require('../mod/Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CountRoll: {
    displayName: 'CountRoll'
  }
};

var _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/component/CountRoll.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/component/CountRoll.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformHmrLibIndexJs2(_UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var CountRoll = _wrapComponent('CountRoll')((_temp = _class = function (_Component) {
  _inherits(CountRoll, _Component);

  function CountRoll(props) {
    _classCallCheck(this, CountRoll);

    var _this = _possibleConstructorReturn(this, (CountRoll.__proto__ || Object.getPrototypeOf(CountRoll)).call(this, props));

    _this.state = {
      valueStart: (0, _Util2.default)(_this.props.start, _this.props.decimals, _this.props.useGroup),
      height: 'auto',
      animationStyle: _this.setAnimationStyle(0, false),
      arrayLi: [],
      updateState: false
    };
    return _this;
  }

  _createClass(CountRoll, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getAllCount();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var maxHeight = this.elementLi.offsetHeight;
      this.setInit(maxHeight);
      this.startAnimation();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({ updateState: true });
      this.getAllCount();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.updateState) {
        this.setInit(this.state.height);
        this.startAnimation();
      }
    }

    /* 计算数值 */

  }, {
    key: 'getAllCount',
    value: function getAllCount() {
      var t = 0;
      var result = void 0;
      var arr = [];
      var c = this.props.count - this.props.start;
      var b = this.props.start;
      var d = this.props.duration;
      var temp = d / 19;
      for (var i = 0; i < 19; i++) {
        t += temp;
        if (t < this.props.duration) {
          result = this.countUp(t, b, c, d);
        } else {
          result = (0, _Util2.default)(this.props.count, this.props.decimals, this.props.useGroup);
        }
        arr.unshift(result);
      }
      this.setState({ arrayLi: arr });
    }

    /* 初始化 */

  }, {
    key: 'setInit',
    value: function setInit(maxHeight) {
      this.setState({
        height: maxHeight,
        animationStyle: this.setAnimationStyle(maxHeight * 19, true)
      });
    }

    /* 设置Style */

  }, {
    key: 'setAnimationStyle',
    value: function setAnimationStyle(height, reset) {
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

    /* 开始动画 */

  }, {
    key: 'startAnimation',
    value: function startAnimation() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ animationStyle: _this2.setAnimationStyle(0, false) });
      }, 200);
    }
    /* 重新开始 */

  }, {
    key: 'restartAnimation',
    value: function restartAnimation() {
      this.setState({ animationStyle: this.setAnimationStyle(this.state.height * 19, true) });
      this.startAnimation();
    }

    /**
     * tween Qunit easeOut
     */

  }, {
    key: 'countUp',
    value: function countUp(t, b, c, d) {
      var temp = t / d - 1;
      var result = c * (Math.pow(temp, 5) + 1) + b;
      return this.formatNumber(result);
    }
  }, {
    key: 'formatNumber',
    value: function formatNumber(number) {
      var str = parseFloat(number).toFixed(this.props.decimals);
      if (this.props.useGroup && this.props.decimals >= 1) {
        var array1 = str.split('.')[0].split('').reverse().join('');
        var array2 = str.split('.')[1];
        array1 = array1.replace(/(\d{3})(?=[^$])/g, '$1,');
        array1 = array1.split('').reverse().join('');
        str = array1 + '.' + array2;
      }
      return str;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react3.default.createElement(
        'div',
        {
          className: 'count-roll-main',
          style: { height: this.state.height }
        },
        _react3.default.createElement(
          'ul',
          {
            className: 'count-roll-ul',
            style: _extends({}, this.state.animationStyle)
          },
          this.state.arrayLi.map(function (value, index) {
            return _react3.default.createElement(
              'li',
              { key: index },
              value
            );
          }),
          _react3.default.createElement(
            'li',
            {
              className: 'count-roll-li',
              ref: function ref(li) {
                _this3.elementLi = li;
              }
            },
            this.state.valueStart
          )
        )
      );
    }
  }]);

  return CountRoll;
}(_react2.Component), _class.displayName = 'CountRoll', _class.propTypes = {
  start: _react2.PropTypes.number,
  count: _react2.PropTypes.number,
  duration: _react2.PropTypes.number,
  decimals: _react2.PropTypes.number,
  useGroup: _react2.PropTypes.bool
}, _temp));

exports.default = CountRoll;