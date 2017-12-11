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

var CountSlide = function (_Component) {
  _inherits(CountSlide, _Component);

  function CountSlide(props) {
    _classCallCheck(this, CountSlide);

    var _this = _possibleConstructorReturn(this, (CountSlide.__proto__ || Object.getPrototypeOf(CountSlide)).call(this, props));

    _this.setInit = function () {
      return _this.__setInit__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.setLiStyle = function () {
      return _this.__setLiStyle__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.startAnimation = function () {
      return _this.__startAnimation__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.clearTimer = function () {
      return _this.__clearTimer__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      arrayLi: (0, _utils.formatNumber)(_this.props.count, _this.props.decimals, _this.props.useGroup).split(''),
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
    _this.elLi = [];
    return _this;
  }

  _createClass(CountSlide, [{
    key: '__clearTimer__REACT_HOT_LOADER__',
    value: function __clearTimer__REACT_HOT_LOADER__() {
      return this.__clearTimer__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__startAnimation__REACT_HOT_LOADER__',
    value: function __startAnimation__REACT_HOT_LOADER__() {
      return this.__startAnimation__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__setLiStyle__REACT_HOT_LOADER__',
    value: function __setLiStyle__REACT_HOT_LOADER__() {
      return this.__setLiStyle__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__setInit__REACT_HOT_LOADER__',
    value: function __setInit__REACT_HOT_LOADER__() {
      return this.__setInit__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var style = [];
      var li = {};
      this.state.arrayLi.forEach(function () {
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
      this.setInit();
      this.startAnimation();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var propsUpdate = !(0, _utils.equalObject)(this.props, nextProps);
      if (propsUpdate) {
        this.elLi = [];
        this.clearTimer();
        var style = [];
        var li = {};
        this.state.arrayLi.forEach(function () {
          li = {
            left: '100%'
          };
          style.push(li);
        });
        this.setState({
          arrayLi: (0, _utils.formatNumber)(nextProps.count, nextProps.decimals, nextProps.useGroup).split(''),
          updateState: true,
          listStyle: style
        });
      }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    // }

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.updateState) {
        this.setInit();
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
    key: '__setInit__REACT_HOT_LOADER__',


    /* 设置每个li的样式 */
    value: function __setInit__REACT_HOT_LOADER__() {
      var width = 0;
      var position = [];
      var arrayClass = [];
      var listEl = this.ul.children;
      for (var i = 0, len = listEl.length; i < len; i++) {
        arrayClass.push(false);
        var li = listEl[i];
        if (i === 0) {
          position.push(li.offsetWidth / 2);
          width += li.offsetWidth * 3 / 2;
        } else {
          position.push(width);
          width += li.offsetWidth;
        }
      }
      this.setState({
        ulStyle: {
          width: width + 'px',
          height: listEl[0].offsetHeight + 'px'
        },
        listPosition: position,
        listClass: arrayClass,
        updateState: false
      });
    }
  }, {
    key: '__setLiStyle__REACT_HOT_LOADER__',
    value: function __setLiStyle__REACT_HOT_LOADER__(index, interval) {
      var arrStyle = this.state.listStyle;
      var arrClass = this.state.listClass;
      arrStyle[index] = {
        transitionDuration: interval / 1000 + 's',
        WebkitTransitionDuration: interval / 1000 + 's',
        MozAnimationDirection: interval / 1000 + 's',
        OTransitionDuration: interval / 1000 + 's',
        left: this.state.listPosition[index] + 'px'
      };
      if (index > 1 && index <= this.state.arrayLi.length) {
        arrClass[index - 2] = true;
      }
      this.setState({
        listStyle: arrStyle,
        listClass: arrClass
      });
    }
  }, {
    key: '__startAnimation__REACT_HOT_LOADER__',
    value: function __startAnimation__REACT_HOT_LOADER__() {
      var _this2 = this;

      var interval = this.props.duration / this.state.arrayLi.length;
      var index = 0;
      if (this.timer) {
        return;
      }
      this.timer = setInterval(function () {
        if (index === _this2.state.arrayLi.length) {
          _this2.setLiStyle(index, interval);
          _this2.clearTimer();
        } else {
          _this2.setLiStyle(index, interval);
          index += 1;
        }
      }, interval);
    }
  }, {
    key: '__clearTimer__REACT_HOT_LOADER__',
    value: function __clearTimer__REACT_HOT_LOADER__() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'count-slide-main' },
        _react2.default.createElement(
          'ul',
          {
            className: 'count-slide-ul',
            style: _extends({}, this.state.ulStyle),
            ref: function ref(node) {
              return _this3.ul = node;
            }
          },
          this.state.arrayLi.map(function (value, index) {
            return _react2.default.createElement(
              'li',
              {
                className: 'count-slide-li ' + (_this3.state.listClass[index] ? 'count-slide-li-tremble' : ''),
                style: _extends({}, _this3.state.listStyle[index])
              },
              value
            );
          })
        )
      );
    }
  }]);

  return CountSlide;
}(_react.Component);

CountSlide.displayName = 'CountSlide';
CountSlide.propTypes = {
  // start: PropTypes.number,
  count: _react.PropTypes.number,
  duration: _react.PropTypes.number,
  decimals: _react.PropTypes.number,
  useGroup: _react.PropTypes.bool
};
var _default = CountSlide;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CountSlide, 'CountSlide', 'src/component/CountSlide.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/component/CountSlide.jsx');
}();

;