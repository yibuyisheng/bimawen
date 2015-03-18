var React = require('react');

var Title = React.createClass({
    render: function() {
        return (
            <h2 className="title">{this.props.children}</h2>
        );
    }
});

module.exports = Title;