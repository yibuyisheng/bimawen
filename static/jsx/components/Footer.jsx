import React from 'react';
import Button from './Button.jsx';
import { HashLocation } from 'react-router';

var Footer = React.createClass({
    render: function() {
        return (
            <footer className="footer-component">
                <Button onTap={() => HashLocation.replace('/appointment-1')}>
                    <i className="ion-ios-calendar-outline" />
                    <br />
                    保养
                </Button>
                <Button onTap={() => HashLocation.replace('/appointment-emergency-1')}>
                    <i className="ion-ios-timer" />
                    <br />
                    救援
                </Button>
                <Button onTap={() => HashLocation.replace('/user-center/index')}>
                    <i className="ion-person" />
                    <br />
                    我的
                </Button>
            </footer>
        );
    }
});

export default Footer;