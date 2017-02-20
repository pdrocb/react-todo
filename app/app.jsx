var React = require('react');
var ReactDOM = require('react-dom');
//This will give you new URL that people will be able to visit.
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Load foundation
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>React Base</p>,
    document.getElementById('app')
);
