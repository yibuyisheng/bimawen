import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Select from '../components/Select.jsx';
import { HashLocation } from 'react-router';

var AppointmentTime = React.createClass({
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="appointment-time">
                <Header leftButton={leftButton}>预约</Header>
                <div className="content">
                    <Title>预约时间</Title>
                    <p>设定预约时间：</p>
                    <p>
                        <input type="date" />
                        <i className="ion-ios-calendar-outline" />
                    </p>
                    <p>
                        <Select>
                            <option>0</option>
                            <option>1</option>
                        </Select>
                        点
                        <Select>
                            <option>00</option>
                            <option>01</option>
                        </Select>
                        分
                    </p>
                </div>
                <Button className="big-button">保存预约时间</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentTime;