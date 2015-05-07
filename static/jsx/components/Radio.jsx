import React from 'react';
import addons from 'react-addons';
import Tap from './Tap.jsx';

var Radio = React.createClass({
    render: function () {
        var cx = addons.classSet;
        var classes = cx(this.props.checked ? 'ion-ios-circle-filled' : 'ion-ios-circle-outline');
        return (
            <Tap onTap={() => {this.props.onChange && this.props.onChange()}}>
                <radio className={classes} />
            </Tap>
        );
    }
});

export default Radio;