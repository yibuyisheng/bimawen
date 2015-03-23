var React = require('react');
var Header = require('../../components/Header.jsx');
var Footer = require('../../components/Footer.jsx');
var Title = require('../../components/Title.jsx');
var Button = require('../../components/Button.jsx');

var AccountSet = React.createClass({
    render: function() {
        return (
            <div className="account-set">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>账号设置</Title>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = AccountSet;