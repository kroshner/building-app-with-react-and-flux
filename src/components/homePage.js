"use strict";

var React = require("react");

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration course</h1>
                <p>React, React Router, Flux</p>
            </div>
        );
    }
})

module.exports = Home;