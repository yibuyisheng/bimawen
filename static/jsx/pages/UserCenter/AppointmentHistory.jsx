var React = require('react');
var Header = require('../../components/Header.jsx');
var Footer = require('../../components/Footer.jsx');
var Title = require('../../components/Title.jsx');
var Button = require('../../components/Button.jsx');

var AppointmentHistory = React.createClass({
    render: function() {
        return (
            <div className="appointment-history">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>预约服务记录</Title>
                    <ul className="list">
                        <li>
                            <span>2015-3-1</span>
                            <span>小保养</span>
                            <span>228元</span>
                            <i>icon</i>
                        </li>
                        <li>
                            <span>2015-3-1</span>
                            <span>小保养</span>
                            <span>228元</span>
                            <i>icon</i>
                        </li>
                        <li>
                            <span>2015-3-1</span>
                            <span>小保养</span>
                            <span>228元</span>
                            <i>icon</i>
                        </li>
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = AppointmentHistory;