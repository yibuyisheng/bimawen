import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import actions from '../actions.jsx';
import userStore from '../store/user.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';

var Appointment1 = React.createClass({
    goAppointment: function () {
        var stop = userStore.listen(function (isLogin) {
            HashLocation.push(isLogin ? 'appointment-2' : '/login');
            stop();
        });
        var obj = actions.user.isLogin();
    },
    render: function() {
        return (
            <div className="appointment-1">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>您爱车的上门养护专家</Title>
                    <p>了解车辆上门养护</p>
                    <p>
                        <button className="selected">小保养</button>
                        <button>大保养</button>
                    </p>
                    <ul>
                        <li>√ 清洗发动机舱</li>
                        <li>√ 更换机油</li>
                        <li>√ 检查刹车片</li>
                        <li>√ 发动机舱清洗</li>
                    </ul>
                </div>
                <p>根据您的爱车车型，我们还可定制适合您爱车的机油。</p>
                <Button className="big-button" onTap={this.goAppointment}>开始预约</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default Appointment1;