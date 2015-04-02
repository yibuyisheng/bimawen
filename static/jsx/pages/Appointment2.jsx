import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Select from '../components/Select.jsx';
import { HashLocation } from 'react-router';

var Appointment2 = React.createClass({
    nextStep: function () {
        HashLocation.push('/appointment-3');
    },
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="appointment-2">
                <Header leftButton={leftButton}>考拉爱车</Header>
                <div className="content">
                    <Title>车辆信息</Title>
                    <p>
                        <label>车牌号码</label>
                        <Select>
                            <option value="0">沪</option>
                        </Select>
                        <input type="text" />
                    </p>
                    <p>
                        <label>车辆品牌</label>
                        <Select>
                            <option value="0">请选择品牌</option>
                        </Select>
                    </p>
                    <p>
                        <label>车辆型号</label>
                        <Select>
                            <option value="0">请选择车型</option>
                        </Select>
                    </p>
                    <p>
                        <label>车辆年份</label>
                        <Select>
                            <option value="0">请选择车型年份</option>
                        </Select>
                    </p>
                    <div>
                        <h4>车辆备注</h4>
                        <textarea></textarea>
                    </div>
                </div>
                <Button className="big-button" onTap={this.nextStep}>下一步</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default Appointment2;