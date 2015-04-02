import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Select from '../components/Select.jsx';
import { HashLocation } from 'react-router';

var AppointmentEmergency2 = React.createClass({
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="appointment-emergency-2">
                <Header leftButton={leftButton}>考拉爱车</Header>
                <div className="content">
                    <Title>紧急预约</Title>
                    <p>
                        <label>车牌号码</label>
                        <Select>
                            <option>沪</option>
                        </Select>
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
                <Button className="big-button"
                    onTap={() => HashLocation.push('/appointment-emergency-success')}>
                    提交紧急预约
                </Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentEmergency2;