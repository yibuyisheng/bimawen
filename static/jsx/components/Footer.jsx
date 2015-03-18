var React = require('react');
var Button = require('./Button.jsx');

var Footer = React.createClass({
    render: function() {
        var leftButton = this.props.leftButton || {};
        var centerButton = this.props.centerButton || {};
        var rightButton = this.props.rightButton || {};
        return (
            <footer className="footer-component">
                <Button onTap={leftButton.onTap}>
                    首页
                </Button>
                <Button onTap={centerButton.onTap}>
                    门店保养
                </Button>
                <Button onTap={rightButton.onTap}>
                    我
                </Button>
            </footer>
        );
    }
});

module.exports = Footer;