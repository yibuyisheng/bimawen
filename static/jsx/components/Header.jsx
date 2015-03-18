var React = require('react');
var Button = require('./Button.jsx');

var Header = React.createClass({
    render: function() {
        var leftButton = this.props.leftButton || {};
        var rightButton = this.props.rightButton || {};
        return (
            <header className="header-component">
                <Button onTap={leftButton.onTap}>{leftButton.text}</Button>
                <h1>{this.props.children}</h1>
                <Button onTap={rightButton.onTap}>{rightButton.text}</Button>
            </header>
        );
    }
});

module.exports = Header;