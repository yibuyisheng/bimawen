import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import { HashLocation } from 'react-router';

var Login = React.createClass({
    render: function() {
        return (
            <div className="login">
                <Header>预约</Header>
                <Title>短信验证码登录</Title>
                <div className="content">
                    <p>
                        <input type="text" placeholder="注册手机号码" />
                    </p>
                    <p>
                        <input type="text" placeholder="密码" />
                    </p>
                    <p>
                        <Button className="big-button">登录</Button>
                    </p>
                    <p>
                        <a onTouchEnd={HashLocation.replace('/login-verify-code')}>
                            切换到短信验证码登录方式
                        </a>
                    </p>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = Login;