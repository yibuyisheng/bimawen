import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';

var AppointmentEmergencyHistory = React.createClass({
    render: function() {
        return (
            <div className="appointment-history">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>紧急服务记录</Title>
                    <ul className="list">
                        <li>
                            <span>2015-3-1 8:45</span>
                            <span>车胎缺气</span>
                            <i>icon</i>
                        </li>
                        <li>
                            <span>2015-3-1 8:45</span>
                            <span>电瓶缺电</span>
                            <i>icon</i>
                        </li>
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentEmergencyHistory;