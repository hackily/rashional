'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Message = require('./message.jsx');
var BarChart = require('./bar_chart.jsx');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = { n: 0, data: [{ 'name': "foo", 'uv': 100, 'pv': 200, 'amt': 400 }] };

    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'clicked ',
          this.state.n,
          ' times'
        ),
        React.createElement(
          'button',
          { onClick: this.handleClick.bind(this) },
          'click me!'
        ),
        React.createElement(Message, null),
        React.createElement(BarChart, { data: this.data })
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ n: this.state.n + 1 });
    }
  }]);

  return App;
}(React.Component);

module.exports = App;
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = require('react');

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = { n: 0 };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', null, React.createElement('h1', null, 'clicked ', this.state.n, ' times'), React.createElement('button', { onClick: this.handleClick.bind(this) }, 'click me!'));
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ n: this.state.n + 1 });
    }
  }]);

  return App;
}(React.Component);

module.exports = App;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarGraph = function (_React$Component) {
  _inherits(BarGraph, _React$Component);

  function BarGraph(props) {
    _classCallCheck(this, BarGraph);

    var _this = _possibleConstructorReturn(this, (BarGraph.__proto__ || Object.getPrototypeOf(BarGraph)).call(this));

    _this.state = { data: props.data };
    // {data: [
    //   {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    //   {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    //   {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    //   {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    //   {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    //   {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    //   {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},]}
    return _this;
  }

  _createClass(BarGraph, [{
    key: 'updateData',
    value: function updateData() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _recharts.BarChart,
        { width: 730, height: 250, data: this.state.data },
        _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }),
        _react2.default.createElement(_recharts.YAxis, null),
        _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
        _react2.default.createElement(_recharts.Tooltip, null),
        _react2.default.createElement(_recharts.Legend, null),
        _react2.default.createElement(_recharts.Bar, { dataKey: 'pv', fill: '#8884d8' }),
        _react2.default.createElement(_recharts.Bar, { dataKey: 'uv', fill: '#82ca9d' })
      );
    }
  }]);

  return BarGraph;
}(_react2.default.Component);

module.exports = BarGraph;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const React = require('react');

// // var Message = React.createClass ({
// //     getInitialState: function() {
// //         return {main_message: "GO TO THE DOCTOR, FOOL"}
// //     },
// //     render: function() {
// //         return (
// //             <div>{this.state.main_message}</div>
// //         )
// //     }
// // });

// // React.render(<Message />, document.getElementById("Message"))

// class MessageComp extends React.Component {

//     constructor() {
//         super()
//         this.state = {main_message: "GO TO THE DOCTOR, FOOL"}
//     }
//     render () {
//         return <div>{this.state.main_message}</div>
//     }
// }

// module.exports = MessageComp;               

var React = require('react');

var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this));

    _this.state = { mild: "You're ok, sorta", alarm: "To the Doctorrrr" };
    return _this;
  }

  _createClass(Message, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.alarm
      );
    }
  }]);

  return Message;
}(React.Component);

module.exports = Message;
