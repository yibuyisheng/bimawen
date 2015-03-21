var React = require('react');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Title = require('../components/Title.jsx');
var Button = require('../components/Button.jsx');

var AppointmentTime = React.createClass({
    render: function() {
        return (
            <div className="appointment-time">
                <Header>预约</Header>
                <div className="content">
                    <Title>预约时间</Title>
                    <p>设定预约时间：</p>
                    <p>
                        <input type="date" /><i className="date" />
                    </p>
                    <p>
                        <select>
                            <option>0</option>
                            <option>1</option>
                        </select>
                        点
                        <select>
                            <option>00</option>
                            <option>01</option>
                        </select>
                        分
                    </p>
                </div>
                <Button className="big-button">保存预约时间</Button>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = AppointmentTime;