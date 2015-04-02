import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import { HashLocation } from 'react-router';

var Appointment3 = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="appointment-3">
                <Header leftButton={leftButton}>预约</Header>
                <div className="content">
                    <Title>时间和地点</Title>
                    <p>
                        建议预约时间：
                        <a onTouchEnd={() => HashLocation.push('/appointment-time')}>修改预约时间</a>
                    </p>
                    <p>2015-3-15 18:30</p>
                    <p>
                        上门服务地址：
                        <a onTouchEnd={() => HashLocation.push('/appointment-address')}>编辑地址信息</a>
                    </p>
                    <div className="addresses">
                        <p>
                            <input type="radio" name="address" />
                            <span>
                                普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </span>
                            <i className="ion-compose"></i>
                        </p>
                        <p>
                            <input type="radio" name="address" />
                            <span>
                                普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </span>
                            <i className="ion-compose"></i>
                        </p>
                        <p>
                            <input type="radio" name="address" />
                            <span>
                                普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </span>
                            <i className="ion-compose"></i>
                        </p>
                        <p>
                            <input type="radio" name="address" />
                            <span>
                                普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </span>
                            <i className="ion-compose"></i>
                        </p>
                    </div>
                </div>
                <Button className="big-button" onTap={() => HashLocation.push('/appointment-success')}>提交预约</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default Appointment3;