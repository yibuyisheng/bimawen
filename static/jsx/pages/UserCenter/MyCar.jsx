var React = require('react');
var Header = require('../../components/Header.jsx');
var Footer = require('../../components/Footer.jsx');
var Title = require('../../components/Title.jsx');
var Button = require('../../components/Button.jsx');

var AppointmentEmergencyHistory = React.createClass({
    render: function() {
        return (
            <div className="my-car">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>我的车辆</Title>
                    <div>
                        <div>
                            <h4>沪B27585</h4>
                            大众朗逸1.6L 2011款
                        </div>
                        <i>icon</i>
                    </div>
                    <div>
                        <div>
                            <h4>沪B27585</h4>
                            大众朗逸1.6L 2011款
                        </div>
                        <i>icon</i>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = AppointmentEmergencyHistory;