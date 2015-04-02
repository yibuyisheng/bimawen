import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';

var AppointmentHistory = React.createClass({
    render: function() {
        var leftButton = {
            className: 'ion-person',
            onTap: () => {
                HashLocation.pop();
            }
        };
        var rightButton = {
            className: 'ion-ios-gear',
            onTap: () => {

            }
        };
        return (
            <div className="appointment-history">
                <Header leftButton={leftButton} rightButton={rightButton}>个人中心</Header>
                <div className="content">
                    <Title>预约服务记录</Title>
                    <ul className="list">
                        <li>
                            <span>2015-3-1</span>
                            <span>小保养</span>
                            <span>228元</span>
                            <i>icon</i>
                        </li>
                        <li>
                            <span>2015-3-1</span>
                            <span>小保养</span>
                            <span>228元</span>
                            <i>icon</i>
                        </li>
                        <li>
                            <span>2015-3-1</span>
                            <span>小保养</span>
                            <span>228元</span>
                            <i>icon</i>
                        </li>
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentHistory;