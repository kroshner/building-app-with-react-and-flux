$ = jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var routes = require("./routes.js");
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById("app"));