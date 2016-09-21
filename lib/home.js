'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _CountUp = require('./component/CountUp');

var _CountUp2 = _interopRequireDefault(_CountUp);

var _CountRoll = require('./component/CountRoll');

var _CountRoll2 = _interopRequireDefault(_CountRoll);

var _index = require('../dist/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = {
  start: 99923,
  count: 9999999,
  duration: 3000,
  decimals: 4,
  separator: true,
  useGroup: true,
  animation: 'up'
};
var settings2 = {
  start: 1,
  count: 9999999,
  duration: 1000,
  decimals: 2,
  separator: true,
  useGroup: true,
  animation: 'roll'
};
(0, _reactDom.render)(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h1',
    { className: 'title' },
    'Count Animation'
  ),
  _react2.default.createElement(
    'div',
    { className: 'exam-div' },
    _react2.default.createElement(_index2.default, settings)
  ),
  _react2.default.createElement(
    'h1',
    { className: 'title' },
    'Count Roll'
  ),
  _react2.default.createElement(
    'div',
    { className: 'exam-div' },
    _react2.default.createElement(_index2.default, settings2)
  )
), document.getElementById('root'));