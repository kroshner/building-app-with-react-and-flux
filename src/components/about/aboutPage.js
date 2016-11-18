"use strict";

var React = require("react");

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses the following technologies:</p>
                <ul>
                    <li>React</li>
                    <li>React router</li>
                    <li>Flux</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;