import React from 'react';
import addons from 'react-addons';

var Button = React.createClass({
    render: function() {
        var cx = addons.classSet;
        var classes = cx('button', this.props.className);
        return (
            <button className={classes} onTouchEnd={this.props.onTap}>
                {this.props.children}
            </button>
        );
    }
});

export default Button;