var React = require('react');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Title = require('../components/Title.jsx');
var Button = require('../components/Button.jsx');

var LoginVerifyCode = React.createClass({
    render: function() {
        return (
            <div className="login-verify-code">
                <Header>预约</Header>
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
                    <p>
                        <a>切换到账号密码登录方式</a>
                    </p>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = LoginVerifyCode;