import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';
import { isLogin } from '../../services/user.jsx';
import { bindTap } from '../../common.jsx';

let Appointment1 = React.createClass({
    getInitialState: function () {
        return {
            showSmallUpkeep: true,
            showBigUpkeep: false
        };
    },
    goAppointment: function() {
        isLogin()
            .then(() => {
                localStorage.setItem('appointment-1', JSON.stringify({type: this.state.showSmallUpkeep ? 'small' : 'big'}));
                HashLocation.push('appointment-2');
            }, () => {
                HashLocation.push('/login-verify-code');
            });
    },
    onTabSwitch: function(showTab) {
        if (showTab === 'small') {
            this.setState({showSmallUpkeep: true, showBigUpkeep: false});
        } else {
            this.setState({showBigUpkeep: true, showSmallUpkeep: false});
        }
    },
    componentDidMount: function() {
        bindTap(this.refs.knowabout.getDOMNode(), () => {
            HashLocation.push('/flow');
        });
    },
    render: function() {
        return (
            <div className="appointment-1">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>您爱车的上门养护专家</Title>
                    <p ref="knowabout">了解车辆上门养护</p>
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
                        <li>√ 更换机油</li>
                        <li>√ 更换机滤</li>
                        <li>√ 全部38项车辆检测<a href="#/check-detail">查看详情</a></li>
                    </ul>
                    <ul className={this.state.showBigUpkeep ? '' : 'hide'}>
                        <li>√ 更换机油</li>
                        <li>√ 更换机滤</li>
                        <li>√ 更换空气滤</li>
                        <li>√ 全部38项车辆检测<a href="#/check-detail">查看详情</a></li>
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