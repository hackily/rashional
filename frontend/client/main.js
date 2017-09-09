
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('../components/app.jsx'); //Must use babel-node for this to work
//const App = require('../components/babelified.js'); //Uncomment if you would prefer to run babel script first

const main = document.getElementsByTagName('main')[0];
ReactDOM.render(<App />, main);