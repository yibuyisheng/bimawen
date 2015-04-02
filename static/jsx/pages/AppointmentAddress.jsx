import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Select from '../components/Select.jsx';
import { HashLocation } from 'react-router';

var AppointmentAddress = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="appointment-address">
                <Header leftButton={leftButton}>预约</Header>
                <div className="content">
                    <Title>编辑地址</Title>
                    <p>
                        <Select>
                            <option>上海市</option>
                        </Select>
                        <Select>
                            <option>普陀区</option>
                        </Select>
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

export default AppointmentAddress;