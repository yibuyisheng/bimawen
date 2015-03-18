var React = require('react');

var Button = React.createClass({
    render: function() {
        return (
            <button className="button" onTouchEnd={this.props.onTap}>
                {this.props.children}
            </button>
        );
    }
});

module.exports = Button;