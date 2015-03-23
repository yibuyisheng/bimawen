var React = require('react');
var Header = require('../../components/Header.jsx');
var Footer = require('../../components/Footer.jsx');
var Title = require('../../components/Title.jsx');
var Button = require('../../components/Button.jsx');

var MyInfo = React.createClass({
    render: function() {
        return (
            <div className="my-info">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>我的资料</Title>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = MyInfo;