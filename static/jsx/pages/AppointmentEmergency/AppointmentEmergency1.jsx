import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';
import addons from 'react-addons';

var AppointmentEmergency1 = React.createClass({
    getInitialState: function () {
        return {
            type: 1,
            appointmentState: 'ready',
            buttonText: '紧急'
        };
    },
    onEmergency: function () {
        if (this.state.appointmentState === 'success') {
            return;
        } else if (this.state.appointmentState === 'appointing') {
            this.setState({
                appointmentState: 'ready',
                buttonText: '紧急'
            });
            clearInterval(this.timer);
        } else {
            this.setState({
                appointmentState: 'appointing',
                buttonText: '取消（#counter#）',
                counter: 3
            });
            this.timer = setInterval(() => {
                var counter = this.state.counter;
                if (counter <= 0) {
                    this.setState({
                        appointmentState: 'success',
                        buttonText: '成功'
                    });
                    return clearInterval(this.timer);
                }

                counter--;
                this.setState({ counter: counter });
            }, 1000);
        }
    },
    render: function () {
        var type = this.state.type;  // 紧急预约类型

        return (
            <div className="appointment-emergency-1">
                <Header>考拉爱车</Header>
                <div className={addons.classSet("content", type === 1 ? '' : 'hide')}>
                    <Title>您爱车的上门养护专家</Title>
                    <p>了解紧急上门服务</p>
                    <p>
                        <button>紧急上门服务</button>
                    </p>
                    <ul>
                        <li>√ 车辆无法发动</li>
                        <li>√ 车辆轮胎缺气</li>
                        <li>√ 车辆钥匙失效</li>
                        <li>√ 车辆电瓶缺电</li>
                    </ul>
                </div>
                <p className={addons.classSet(type === 1 ? '' : 'hide')}>
                    根据您的爱车车型，我们还可定制适合您爱车的机油。
                </p>
                <Button className={addons.classSet("big-button", type === 1 ? '' : 'hide')}
                    onTap={() => HashLocation.push('/appointment-emergency-2')}>
                    开始紧急预约
                </Button>

                <div className={addons.classSet("type2", "content", type === 2 ? '' : 'hide', this.state.appointmentState)}>
                    <Title>您爱车的上门养护专家</Title>
                    <p>了解紧急上门服务</p>
                    <div>
                        <i className="ion-ios-location"></i>
                        <p>
                            普陀区棕榈路212弄36号303室<br />
                            顾刚 15001750001
                        </p>
                        <i className="ion-ios-compose-outline"></i>
                    </div>
                    <Button className="circle" onTap={this.onEmergency}>
                        {this.state.buttonText.replace('#counter#', this.state.counter)}
                    </Button>
                    <p>
                        <span>
                            点击紧急按钮3秒后，<br />
                            您的请求将会发送到我们的服务团队。
                        </span>
                        <span>
                            您的紧急请求，<br />
                            即将发送到我们的服务团队。
                        </span>
                        <span>
                            我们的服务团队会在5分钟内给您回电。
                        </span>
                    </p>

                    <Button className="back big-button">返回</Button>
                </div>

                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentEmergency1;