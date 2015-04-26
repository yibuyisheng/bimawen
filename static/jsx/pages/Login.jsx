import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import { HashLocation } from 'react-router';
import actions from '../actions.jsx';
import userStore from '../store/User.jsx';
import Reflux from 'reflux';
import { base } from 'utilities';

var Login = React.createClass({
    mixins: [Reflux.connect(userStore, 'user')],
    onTouchEnd: function () {
        HashLocation.replace('/login-verify-code');
    },
    onLogin: function () {
        var phone = this.refs.phone.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        actions.user.login(phone, password);
    },
    onLoginEnd: function (result) {
        if (base.isString(result)) {
            alert(result);
        } else {
            console.log('token', result.token);
        }
    },
    componentDidMount: function () {
        this.listenTo(userStore, this.onLoginEnd);
    },
    render: function () {
        var leftButton = {
            className: 'ion-android-home',
            onTap: () => {
                HashLocation.replace('/appointment-1');
            }
        };

        return (
            <div className="login">
                <Header leftButton={leftButton}>预约</Header>
                <Title>短信验证码登录</Title>
                <div className="content">
                    <p>
                        <input type="text" ref="phone" placeholder="注册手机号码" />
                    </p>
                    <p>
                        <input type="text" ref="password" placeholder="密码" />
                    </p>
                    <p>
                        <Button className="big-button" onTap={ this.onLogin }>登录</Button>
                    </p>
                    <p>
                        <a onTouchEnd={ this.onTouchEnd }>
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