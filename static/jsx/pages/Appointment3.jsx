var React = require('react');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');
var Title = require('../components/Title.jsx');
var Button = require('../components/Button.jsx');

var Appointment3 = React.createClass({
    render: function() {
        return (
            <div className="appointment-3">
                <Header>预约</Header>
                <div className="content">
                    <Title>时间和地点</Title>
                    <p>
                        建议预约时间：
                        <a>修改预约时间</a>
                    </p>
                    <p>2015-3-15 18:30</p>
                    <p>
                        上门服务地址：
                        <a>编辑地址信息</a>
                    </p>
                    <div className="addresses">
                        <p>
                            <input type="radio" />
                            <span>
                                普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </span>
                            <i>icon</i>
                        </p>
                        <p>
                            <input type="radio" />
                            <span>
                                普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </span>
                            <i>icon</i>
                        </p>
                        <p>
                            <input type="radio" />
                            <span>
                                普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </span>
                            <i>icon</i>
                        </p>
                        <p>
                            <input type="radio" />
                            <span>
                                普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </span>
                            <i>icon</i>
                        </p>
                    </div>
                </div>
                <Button className="big-button">提交预约</Button>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = Appointment3;