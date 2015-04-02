var React = require('react');
var addons = require('react-addons');

var Select = React.createClass({
    render: function() {
        var cx = addons.classSet;
        var classes = cx('select', this.props.className);
        return (
            <select className={classes}
                style={{height:'42px'}}>
                {this.props.children}
            </select>
        );
    }
});

module.exports = Select;