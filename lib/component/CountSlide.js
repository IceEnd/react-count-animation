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
  CountSlide: {
    displayName: 'CountSlide'
  }
};

var _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/component/CountSlide.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/component/CountSlide.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformHmrLibIndexJs2(_UsersCononicoGitHubReactCountAnimationNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var CountSlide = _wrapComponent('CountSlide')((_temp = _class = function (_Component) {
  _inherits(CountSlide, _Component);

  function CountSlide(props) {
    _classCallCheck(this, CountSlide);

    var _this = _possibleConstructorReturn(this, (CountSlide.__proto__ || Object.getPrototypeOf(CountSlide)).call(this, props));

    _this.state = {
      arryLi: (0, _Util2.default)(_this.props.count, _this.props.decimals, _this.props.useGroup).split(''),
      ulStyle: {
        width: 'auto',
        height: 'auto'
      },
      listPosition: [],
      start: false,
      listStyle: [],
      listClass: [],
      updateState: false
    };
    return _this;
  }

  _createClass(CountSlide, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var style = [];
      var li = {};
      this.state.arryLi.forEach(function () {
        li = {
          left: '100%'
        };
        style.push(li);
      });
      this.setState({
        listStyle: style
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setInit(this.arrayLi);
      this.startAnimation();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.clearTimer();
      this.setState({ updateState: true });
      var style = [];
      var li = {};
      this.state.arryLi.forEach(function () {
        li = {
          left: '100%'
        };
        style.push(li);
      });
      this.setState({
        listStyle: style
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.updateState) {
        this.setInit(this.arrayLi);
        this.startAnimation();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimer();
    }

    /* 初始化 */

  }, {
    key: 'setInit',
    value: function setInit(arrayLi) {
      var width = 0;
      var position = [];
      var arrayClass = [];
      arrayLi.forEach(function (li) {
        position.push(width);
        arrayClass.push(false);
        width += li.offsetWidth;
      });
      this.setState({
        ulStyle: {
          width: width + 'px',
          height: arrayLi[0].offsetHeight + 'px'
        },
        listPosition: position,
        listClass: arrayClass
      });
    }

    /* 设置每个li的样式 */

  }, {
    key: 'setLiStyle',
    value: function setLiStyle(index, interval) {
      var arrStyle = this.state.listStyle;
      var arrClass = this.state.listClass;
      arrStyle[index] = {
        transitionDuration: interval / 1000 + 's',
        WebkitTransitionDuration: interval / 1000 + 's',
        MozAnimationDirection: interval / 1000 + 's',
        OTransitionDuration: interval / 1000 + 's',
        left: this.state.listPosition[index] + 'px'
      };
      if (index > 1 && index <= this.state.arryLi.length) {
        arrClass[index - 2] = true;
      }
      this.setState({
        listStyle: arrStyle,
        listClass: arrClass
      });
    }
  }, {
    key: 'startAnimation',
    value: function startAnimation() {
      var _this2 = this;

      var interval = this.props.duration / this.state.arryLi.length;
      var index = 0;
      if (this.timer) {
        return;
      }
      this.timer = setInterval(function () {
        if (index === _this2.state.arryLi.length) {
          _this2.setLiStyle(index, interval);
          _this2.clearTimer();
        } else {
          _this2.setLiStyle(index, interval);
          index++;
        }
      }, interval);
    }
  }, {
    key: 'clearTimer',
    value: function clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      this.arrayLi = [];
      return _react3.default.createElement(
        'div',
        { className: 'count-slide-main' },
        _react3.default.createElement(
          'ul',
          { className: 'count-slide-ul', style: _extends({}, this.state.ulStyle) },
          this.state.arryLi.map(function (value, index) {
            return _react3.default.createElement(
              'li',
              {
                className: 'count-slide-li ' + (_this3.state.listClass[index] ? 'count-slide-li-tremble' : ''),
                key: index,
                style: _extends({}, _this3.state.listStyle[index]),
                ref: function ref(li) {
                  _this3.arrayLi.push(li);
                }
              },
              value
            );
          })
        )
      );
    }
  }]);

  return CountSlide;
}(_react2.Component), _class.displayName = 'CountSlide', _class.propTypes = {
  start: _react2.PropTypes.number,
  count: _react2.PropTypes.number,
  duration: _react2.PropTypes.number,
  decimals: _react2.PropTypes.number,
  useGroup: _react2.PropTypes.bool
}, _temp));

exports.default = CountSlide;