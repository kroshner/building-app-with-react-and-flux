"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/#" className="navbar-brand"><img src="images/pluralsight-logo.png" width="25px" height="25px" /></a>
                    <ul className="nav navbar-nav">
                        <li><Link to={"/"}>Home</li>
                        <li><Link to={"/about"}>Home</li>
                        <li><Link to={"/authors"}>Authors</li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;