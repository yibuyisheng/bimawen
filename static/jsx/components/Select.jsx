import React from 'react';
import addons from 'react-addons';

var Select = React.createClass({
    render: function() {
        var cx = addons.classSet;
        var classes = cx('select', this.props.className);
        return (
            <select className={classes}
                value={this.props.value}
                defaultValue={this.props.defaultValue}
                ref={this.props.ref}
                onChange={this.props.onChange}
                style={{height:'30px'}}>
                {this.props.children}
            </select>
        );
    }
});

export default Select;