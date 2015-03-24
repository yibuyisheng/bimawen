import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';

var AppointmentSuccess = React.createClass({
    render: function() {
        return (
            <div className="appointment-success">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>预约成功</Title>
                    <div>
                        <label>车牌号码</label>
                        <p>沪B28585</p>
                    </div>
                    <div>
                        <label>车辆信息</label>
                        <p>大众朗逸1.6L 2014版</p>
                    </div>
                    <div>
                        <label>预约时间</label>
                        <p>2015-3-15 16:30</p>
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
                <Button className="big-button">返回首页</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentSuccess;