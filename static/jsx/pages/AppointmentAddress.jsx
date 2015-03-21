var React = require('react');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Title = require('../components/Title.jsx');
var Button = require('../components/Button.jsx');

var AppointmentAddress = React.createClass({
    render: function() {
        return (
            <div className="appointment-address">
                <Header>预约</Header>
                <div className="content">
                    <Title>编辑地址</Title>
                    <p>
                        <select>
                            <option>上海市</option>
                        </select>
                        <select>
                            <option>普陀区</option>
                        </select>
                    </p>
                    <p>
                        <textarea>棕榈路212弄36号303</textarea>
                    </p>
                    <p>
                        <label>联系人</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label>联系电话</label>
                        <input type="text" />
                    </p>
                    <p>
                        <input type="text" />
                        <Button className="normal-button">获取验证码</Button>
                    </p>
                </div>
                <Button className="big-button">保存地址</Button>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = AppointmentAddress;