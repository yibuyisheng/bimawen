var React = require('react');
var Header = require('../../components/Header.jsx');
var Footer = require('../../components/Footer.jsx');
var Title = require('../../components/Title.jsx');
var Button = require('../../components/Button.jsx');

var AppointmentEmergencyHistory = React.createClass({
    render: function() {
        return (
            <div className="my-address">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>我的车辆</Title>
                    <ul className="list">
                        <li>
                            <p>
                                上海市普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </p>
                            <i>icon</i>
                        </li>
                        <li>
                            <p>
                                上海市普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </p>
                            <i>icon</i>
                        </li>
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = AppointmentEmergencyHistory;