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
      arryLi: (0, _Util2.default)(_this.props.count, _this.props.decimals, _this.props.useGroup).split('')
    };
    return _this;
  }

  _createClass(CountSlide, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'count-slide-main' },
        _react3.default.createElement(
          'ul',
          { className: 'count-slide-ul' },
          this.state.arryLi.map(function (value, index) {
            return _react3.default.createElement(
              'li',
              { className: 'count-slide-li', key: index },
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

var _default = CountSlide;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CountSlide, 'CountSlide', 'src/component/CountSlide.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/component/CountSlide.jsx');
}();

;