import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';

var SelfInfo = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="user-center-account-set-modify-phone">
                <Header leftButton={leftButton}>
                    个人中心
                </Header>
                <div className="content">
                    <Title>修改注册手机号码</Title>
                    <input type="text" placeholder="新的手机号码" />
                    <div className="verify">
                        <input type="text" placeholder="验证码" />
                        <Button className="normal-button">获取验证码</Button>
                    </div>
                    <div className="space"></div>
                    <Button className="big-button">提交</Button>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelfInfo;