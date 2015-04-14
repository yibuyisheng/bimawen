import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import { HashLocation } from 'react-router';

var LoginVerifyCode = React.createClass({
    onTouchEnd: function () {
        HashLocation.replace('/login');
    },
    render: function () {
        var leftButton = {
            className: 'ion-android-home',
            onTap: () => {
                HashLocation.replace('/appointment-1');
            }
        };

        return (
            <div className="login-verify-code">
                <Header>登录</Header>
                <Title>短信验证码登录</Title>
                <div className="content">
                    <p>
                        <input type="text" placeholder="注册手机号码" />
                    </p>
                    <p>
                        <input type="text" placeholder="短信验证码" />
                        <Button className="normal-button">获取验证码</Button>
                    </p>
                    <p>
                        <Button className="big-button">登录</Button>
                    </p>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = LoginVerifyCode;