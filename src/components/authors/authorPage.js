var React = require("react");
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList");

var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorApi.getAllAuthors()
        };
    },
    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorPage;