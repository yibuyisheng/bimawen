import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';
import { dateHelper } from 'utilities';
import ReactRouter from 'react-router';

var AppointmentSuccess = React.createClass({
    mixins: [ ReactRouter.State ],
    getInitialState: function() {
        var params = JSON.parse(this.getQuery().info);
        params.time = new Date(parseInt(params.time));
        return params;
    },
    render: function() {
        var leftButton = {
            className: 'ion-android-home',
            onTap: () => {
                HashLocation.replace('/appointment-1');
            }
        };
        return (
            <div className="appointment-success">
                <Header leftButton={leftButton}>考拉爱车</Header>
                <div className="content">
                    <Title>预约成功</Title>
                    <div>
                        <label>车牌号码</label>
                        <p>{this.state.car.license_plate_aleph}</p>
                    </div>
                    <div>
                        <label>车辆信息</label>
                        <p>{this.state.car.license_plate}</p>
                    </div>
                    <div>
                        <label>预约时间</label>
                        <p>{dateHelper.format(this.state.time, 'yyyy-MM-dd HH:mm')}</p>
                    </div>
                    <div>
                        <label>上门地址</label>
                        <p>{this.state.address.city + this.state.address.district + this.state.address.detail_address}</p>
                    </div>
                    <div>
                        <label>联系人</label>
                        <p>{this.state.address.contact}</p>
                    </div>
                    <div>
                        <label>联系电话</label>
                        <p>{this.state.address.contact_phone}</p>
                    </div>
                </div>
                <Button className="big-button" onTap={() => HashLocation.push('/appointment-1')}>返回首页</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default AppointmentSuccess;