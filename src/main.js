$ = jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var Home = require("./components/homePage.js");
var About = require("./components/about/aboutPage.js");
var Header = require("./components/common/header.js");
var Authors = require("./components/authors/authorPage")

var App = React.createClass({
    render: function() {
        var Child;
        switch(this.props.route) {
            case "about": Child = About; break;
            case "authors": Child = Authors; break;
            default: Child = Home; break;
        }
        return (<div><Header /><Child /></div>);
    }
});

function renderHashChange() {
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route}/>, document.getElementById("app"));
}

window.addEventListener("hashchange", renderHashChange);
renderHashChange();