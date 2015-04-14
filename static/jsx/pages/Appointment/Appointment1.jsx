import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import actions from '../../actions.jsx';
import userStore from '../../store/user.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';

var Appointment1 = React.createClass({
    getInitialState: function () {
        return {
            showSmallUpkeep: true,
            showBigUpkeep: false
        };
    },
    goAppointment: function () {
        var stop = userStore.listen(function (isLogin) {
            HashLocation.push(isLogin ? 'appointment-2' : '/login-verify-code');
            stop();
        });
        var obj = actions.user.isLogin();
    },
    onTabSwitch: function (showTab) {
        if (showTab === 'small') {
            this.setState({showSmallUpkeep: true, showBigUpkeep: false});
        } else {
            this.setState({showBigUpkeep: true, showSmallUpkeep: false});
        }
    },
    render: function() {
        return (
            <div className="appointment-1">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>您爱车的上门养护专家</Title>
                    <p>了解车辆上门养护</p>
                    <p>
                        <button className={this.state.showSmallUpkeep ? 'selected' : ''}
                            onTouchEnd={() => this.onTabSwitch('small')}>
                            小保养
                        </button>
                        <button className={this.state.showBigUpkeep ? 'selected' : ''}
                            onTouchEnd={() => this.onTabSwitch('big')}>
                            大保养
                        </button>
                    </p>
                    <ul className={this.state.showSmallUpkeep ? '' : 'hide'}>
                        <li>√ 清洗发动机舱</li>
                        <li>√ 更换机油</li>
                        <li>√ 检查刹车片</li>
                        <li>√ 发动机舱清洗</li>
                    </ul>
                    <ul className={this.state.showBigUpkeep ? '' : 'hide'}>
                        <li>√ 清洗发动机舱1</li>
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