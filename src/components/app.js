var React = require("react");
var Header = require("./common/header.js");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;

var App = React.createClass({
    render: function() {
        return (
        	<div>
        		<Header />
        		<div className="container-fluid">
        			{this.props.children}
        		</div>
    		</div>
		);
    }
});

module.exports = App;