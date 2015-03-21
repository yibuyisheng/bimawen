var React = require('react');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Title = require('../components/Title.jsx');
var Button = require('../components/Button.jsx');

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
                        <a>切换到短信验证码登录方式</a>
                    </p>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = Login;