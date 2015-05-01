import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';

var Flow = React.createClass({
    getInitialState: function () {
        return {};
    },
    _renderItem: function(labelText, detail) {
        return (
            <li>
                <p>
                    <b>{labelText}</b>
                    <i></i>
                </p>
                <p>{detail}</p>
            </li>
        );
    },
    render: function() {
        return (
            <div className="flow-page">
                <Header>考拉爱车</Header>
                <div className="content">
                    <Title>车辆上门养护服务流程</Title>
                    <ul className="main">
                        {this._renderItem('预约', '通过“考拉爱车”手机应用和微信服务号，您可以预约上门保养服务。在您提交预约后，我们的客服会在一小时内与您联系，确认预约信息。')}
                        {this._renderItem('派单', '在您预约服务日前一天，我们会短信通知您上门服务的技师联络信息。如果您需要调整时间，请与我们的客服联系。')}
                        {this._renderItem('布置', '服务技师到达后，会在您的爱车周围布置养护施工场地，放置警示标识，并开始车辆养护准备工作。')}
                        {this._renderItem('检测', '服务技师会首先对您的爱车进行38项车辆全面检查，并详细记录车辆检查的结果。车辆检查过程中，技师会与您沟通车辆的日常使用状况。')}
                        {this._renderItem('保养', '服务技师在常规检查结束后，对您的爱车进行车辆保养操作。根据保养类型的不同，保养的项目也会不同。保养过程中，技师可以解答您的问题。')}
                        {this._renderItem('结算', '在确保对您的爱车检测和保养完成后，我们的服务技师会严格按照保养订单的明细，跟您结算本次上门保养的费用。')}
                        {this._renderItem('回访', '在您的爱车完成上门保养三天内，我们客服会对您进行一次回访。回访是想了解您对我们服务的满意度和建议。')}
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default Flow;