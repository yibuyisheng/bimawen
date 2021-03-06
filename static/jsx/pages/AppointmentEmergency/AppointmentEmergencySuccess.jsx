import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';

var AppointmentEmergencySuccess = React.createClass({
    render: function() {
        return (
            <div className="appointment-emergency-success">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>预约成功</Title>
                    <div>
                        <label>车牌号码</label>
                        <p>沪B28585</p>
                    </div>
                    <div>
                        <label>车辆问题</label>
                        <p>车辆左前胎缺气，需要紧急充气。</p>
                    </div>
                    <div>
                        <label>上门地址</label>
                        <p>上海市普陀区棕榈路212弄36号303室</p>
                    </div>
                    <div>
                        <label>联系人</label>
                        <p>顾刚</p>
                    </div>
                    <div>
                        <label>联系电话</label>
                        <p>15001750001</p>
                    </div>
                </div>
                <p>我们会在5分钟内给您致电，确认紧急服务。</p>
                <Button className="big-button" onTap={() => HashLocation.pop()}>返回</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentEmergencySuccess;