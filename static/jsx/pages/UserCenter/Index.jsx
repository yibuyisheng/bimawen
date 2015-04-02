import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import { HashLocation } from 'react-router';

var Index = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-person'
        };
        var rightButton = {
            className: 'ion-ios-gear'
        };
        return (
            <div className="user-center-index">
                <Header leftButton={leftButton}
                    rightButton={rightButton}>
                    个人中心
                </Header>
                <div className="content">
                    <div onTouchEnd={() => HashLocation.push('/user-center/appointment-history')}>
                        <i className="ion-ios-calendar-outline"></i>
                        <h3>预约服务</h3>
                        <b>15</b>
                    </div>
                    <div onTouchEnd={() => HashLocation.push('/user-center/appointment-emergency-history')}>
                        <i className="ion-ios-timer"></i>
                        <h3>紧急服务</h3>
                        <b>7</b>
                    </div>
                    <div onTouchEnd={() => HashLocation.push('/user-center/my-car')}>
                        <i className="ion-android-car"></i>
                        <h3>我的车辆</h3>
                        <b>1</b>
                    </div>
                    <div onTouchEnd={() => HashLocation.push('/user-center/my-address')}>
                        <i className="ion-android-pin"></i>
                        <h3>我的地址</h3>
                        <b>5</b>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default Index;