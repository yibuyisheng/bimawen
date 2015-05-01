import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import { HashLocation } from 'react-router';
import Reflux from 'reflux';
import addons from 'react-addons';
import { send } from '../services/verifyCode.jsx';
import { login as apiLogin } from '../services/user.jsx';

var LoginVerifyCode = React.createClass({
    sendCode: function() {
        if (this.state.verifyCodeButton.counter) {
            return;
        }

        send(this.refs.mobile.getDOMNode().value)
            .then(timer)
            .catch((error) => {
                debugger
                console.log(error);
            });

        var self = this;
        function timer() {
            var verifyCodeButton;

            var counter = self.state.verifyCodeButton.counter;
            counter = counter ? (--counter) : 60;
            if (counter > 0) {
                verifyCodeButton = {
                    counter: counter,
                    text: counter + '秒后可重新发送'
                };
                setTimeout(timer, 1000);
            } else {
                verifyCodeButton = {
                    counter: null,
                    text: '获取验证码'
                };
            }

            if (self.isMounted()) {
                self.setState({
                    verifyCodeButton: verifyCodeButton
                });
            }
        }
    },
    login: function() {
        apiLogin(
            this.refs.mobile.getDOMNode().value,
            this.refs.code.getDOMNode().value
        )
            .then(() => {
                // 登录成功
                HashLocation.replace('/appointment-1')
            });
    },
    getInitialState: function() {
        return {
            verifyCodeButton: {
                text: '获取验证码',
                counter: null
            }
        };
    },
    render: function() {
        var verifyCodeButtonClass = addons.classSet({
            'normal-button': true,
            'disabled': !!this.state.verifyCodeButton.counter
        });

        return (
            <div className="login-verify-code">
                <Header>登录</Header>
                <Title>短信验证码登录</Title>
                <div className="content">
                    <p>
                        <input type="text" placeholder="注册手机号码" ref="mobile" />
                    </p>
                    <p>
                        <input type="text" placeholder="短信验证码" ref="code" />
                        <Button className={verifyCodeButtonClass} onTap={this.sendCode}>
                            {this.state.verifyCodeButton.text}
                        </Button>
                    </p>
                    <p>
                        <Button className="big-button" onTap={this.login}>登录</Button>
                    </p>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = LoginVerifyCode;