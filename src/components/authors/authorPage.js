"use strict";
var React = require("react");
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList");

var Authors = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorApi.getAllAuthors()
        };
    },
    // componentDidMount: function() {
    //     console.log("componentDidMount");//2
    // },
    // componentWillMount: function() {
    //     console.log("componentWillMount");//1
    // },
    // componentWillReceiveProps: function() {
    //     console.log("componentWillReceiveProps");
    // },
    // shouldComponentUpdate: function() {
    //     console.log("shouldComponentUpdate");
    // },
    // componentWillUpdate: function() {
    //     console.log("componentWillUpdate");
    // },
    // componentWillUnmount: function() {
    //     console.log("componentWillUnmount");//3
    // },
    // componentDidUpdate: function() {
    //     console.log("componentDidUpdate");
    // },
    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = Authors;