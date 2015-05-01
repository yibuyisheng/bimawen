import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';

var Flow = React.createClass({
    getInitialState: function () {
        return {};
    },
    _renderItem: function(title, items) {
        return (
            <section>
                <h3>{title}</h3>
                <ul>
                    {items.map((item) => { return (<li>{item}</li>) })}
                </ul>
            </section>
        );
    },
    render: function() {
        return (
            <div className="check-detail-page">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>车辆上门养护服务流程</Title>
                    <div className="main">
                        {this._renderItem('保养类（8项）', ['机油品质及液位', '机油滤芯', '空气滤芯', '空调滤芯', '防冻液冰点值', '蓄电池状态', '刹车油含水量', '雨刮水液位'])}
                        {this._renderItem('易损类（14项）', ['雨刮片', '雨刮喷嘴角度', '左前胎花纹', '右前胎花纹', '左后胎花纹', '右后胎花纹', '左前胎胎压', '右前胎胎压', '左后胎胎压', '右后胎胎压', '前刹车片', '后刹车片', '前刹车盘', '后刹车盘'])}
                        {this._renderItem('照明类（9项）', ['仪表指示灯', '内部照明', '前雾灯', '后雾灯', '近光灯', '远光灯', '刹车灯', '转向灯', '倒车灯'])}
                        {this._renderItem('底盘类（4项）', ['球头', '连接杆和转向拉杆', '排气管及吊脚', '可视部位无渗漏'])}
                        {this._renderItem('网络系统类（1项）', ['专用电脑诊断'])}
                        {this._renderItem('网络系统类（2项）', ['漆面', '内饰'])}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default Flow;