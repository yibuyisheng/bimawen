import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import { HashLocation } from 'react-router';
import { getAppointmentCount } from '../../services/appointment.jsx';
import Tap from '../../components/Tap.jsx';

var Index = React.createClass({
    getInitialState: function() {
        getAppointmentCount()
            .then((count) => {
                this.apCount = count;
                this.forceUpdate();
            });
        return {};
    },
    render: function () {
        var leftButton = {
            className: 'ion-person',
            onTap: () => {
                HashLocation.push('/user-center/account-set');
            }
        };
        return (
            <div className="user-center-index">
                <Header leftButton={leftButton}>
                    个人中心
                </Header>
                <div className="content">
                    <Tap onTap={() => HashLocation.push('/user-center/appointment-history')}>
                        <div>
                            <i className="ion-ios-calendar-outline"></i>
                            <h3>保养</h3>
                            <b>{this.apCount}</b>
                        </div>
                    </Tap>
                    <div onTouchEnd={() => HashLocation.push('/user-center/appointment-emergency-history')}>
                        <i className="ion-ios-timer"></i>
                        <h3>
                            救援<br />
                            <abbr>救援业务即将上线！</abbr>
                        </h3>
                        <b style={{visibility:'hidden'}}>7</b>
                    </div>
                    <div onTouchEnd={() => HashLocation.push('/user-center/my-car')}>
                        <i className="ion-android-car"></i>
                        <h3>车库</h3>
                        <b style={{visibility:'hidden'}}>1</b>
                    </div>
                    <div onTouchEnd={() => HashLocation.push('/user-center/my-address')}>
                        <i className="ion-android-pin"></i>
                        <h3>地址</h3>
                        <b style={{visibility:'hidden'}}>5</b>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default Index;