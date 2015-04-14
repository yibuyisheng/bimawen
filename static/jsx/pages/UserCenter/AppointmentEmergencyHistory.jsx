import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';

var AppointmentEmergencyHistory = React.createClass({
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
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
                    <Title>紧急服务记录</Title>
                    <ul className="list">
                        <li>
                            <span>2015-3-1 8:45</span>
                            <span>车胎缺气</span>
                            <span className="appointment">预约</span>
                            <i className="ion-chevron-right"></i>
                        </li>
                        <li>
                            <span>2015-3-1 8:45</span>
                            <span>电瓶缺电</span>
                            <span className="appointment">预约</span>
                            <i className="ion-chevron-right"></i>
                        </li>
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentEmergencyHistory;