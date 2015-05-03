import React from 'react';
import { bindTap } from '../common.jsx';

var Tap = React.createClass({
    componentDidMount: function() {
        bindTap(this.refs.tap.getDOMNode(), this.props.onTap);
    },
    render: function() {
        return (
            <tap ref="tap">{this.props.children}</tap>
        );
    }
});

export default Tap;