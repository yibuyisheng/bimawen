var React = require('react');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Title = require('../components/Title.jsx');
var Button = require('../components/Button.jsx');

var AppointmentEmergency2 = React.createClass({
    render: function() {
        return (
            <div className="appointment-emergency-2">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>紧急预约</Title>
                    <p>
                        <label>车牌号码</label>
                        <select>
                            <option>沪</option>
                        </select>
                        <input type="text" />
                    </p>
                    <p>
                        <label>车辆问题</label>
                        <textarea placeholder="简述车辆问题"></textarea>
                    </p>
                    <p>
                        上门服务地址
                        <a>更换地址</a>
                    </p>
                    <div>
                        <p>
                            普陀区棕榈路212弄36号303室<br />
                            顾刚 15001750001 [<b>默认地址</b>]
                        </p>
                        <i>icon</i>
                    </div>
                </div>
                <p>我们会在5分钟内给您致电，确认紧急服务。</p>
                <Button className="big-button">开始紧急预约</Button>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = AppointmentEmergency2;