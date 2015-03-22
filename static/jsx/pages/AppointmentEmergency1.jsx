var React = require('react');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Title = require('../components/Title.jsx');
var Button = require('../components/Button.jsx');

var AppointmentEmergency1 = React.createClass({
    render: function() {
        return (
            <div className="appointment-emergency-1">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>您爱车的上门养护专家</Title>
                    <p>了解紧急上门服务</p>
                    <p>
                        <button>紧急上门服务</button>
                    </p>
                    <ul>
                        <li>√ 车辆无法发动</li>
                        <li>√ 车辆轮胎缺气</li>
                        <li>√ 车辆钥匙失效</li>
                        <li>√ 车辆电瓶缺电</li>
                    </ul>
                </div>
                <p>根据您的爱车车型，我们还可定制适合您爱车的机油。</p>
                <Button className="big-button">开始紧急预约</Button>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = AppointmentEmergency1;