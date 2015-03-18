var React = require('react');
var ReactRouter = require('react-router');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');

var Login = React.createClass({
    mixins: [ReactRouter.Navigation],
    render: function() {
        var _this = this;
        var leftButton = {
            text: '返回',
            onTap: function() {
                _this.goBack();
            }
        };
        return (
            <div className="login-page">
                <Header leftButton={leftButton}>
                    登录
                </Header>
                <div className="content">
                    登录
                </div>
                <Footer/>
            </div>
        );
    }
});

module.exports = Login;