var React = require("react");
var ReactRouter = require("react-router");
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require("./components/app.js");
var HomePage = require("./components/homePage.js");
var AuthorPage = require("./components/authors/authorPage.js");
var AboutPage = require("./components/about/aboutPage.js");

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="authors" component={AuthorPage} />
		<Route path="about" component={AboutPage} />
	</Route>
);

module.exports = routes;