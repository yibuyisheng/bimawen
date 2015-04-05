import React from 'react';

var Title = React.createClass({
    render: function() {
        return (
            <h2 className="title">{this.props.children}</h2>
        );
    }
});

export default Title;