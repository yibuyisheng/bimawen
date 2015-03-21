var React = require('react');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Title = require('../components/Title.jsx');
var Button = require('../components/Button.jsx');

var Appointment2 = React.createClass({
    render: function() {
        return (
            <div className="appointment-2">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>车辆信息</Title>
                    <p>
                        <label>车牌号码</label>
                        <select>
                            <option value="0">沪</option>
                        </select>
                        <input type="text" />
                    </p>
                    <p>
                        <label>车辆品牌</label>
                        <select>
                            <option value="0">请选择品牌</option>
                        </select>
                    </p>
                    <p>
                        <label>车辆型号</label>
                        <select>
                            <option value="0">请选择车型</option>
                        </select>
                    </p>
                    <p>
                        <label>车辆年份</label>
                        <select>
                            <option value="0">请选择车型年份</option>
                        </select>
                    </p>
                    <div>
                        <h4>车辆备注</h4>
                        <textarea></textarea>
                    </div>
                </div>
                <Button className="big-button">下一步</Button>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = Appointment2;