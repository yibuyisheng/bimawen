import React from 'react';
import addons from 'react-addons';

var Radio = React.createClass({
    getInitialState: function () {
        return {
            checked: this.props.checked
        };
    },
    render: function () {
        var cx = addons.classSet;
        var classes = cx(this.state.checked ? 'ion-ios-circle-filled' : 'ion-ios-circle-outline');
        return (
            <radio className={classes}
                onTouchEnd={() => this.setState({checked: !this.state.checked})} />
        );
    }
});

export default Radio;