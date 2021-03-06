import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';
import Radio from '../../components/Radio.jsx';
import { dateHelper } from 'utilities';
import ReactRouter from 'react-router';
import { getMyAddresses, getDefaultAddress } from '../../services/user.jsx';
import Tap from '../../components/Tap.jsx';
import { urlHelper } from 'utilities';
import { addMaintanance } from '../../services/appointment.jsx';

var Appointment3 = React.createClass({
    mixins: [ ReactRouter.State ],
    _getSuggestTime: function() {
        var ret = new Date();
        ret.setHours(ret.getHours() + 24);
        if (ret.getHours() < 8) {
            ret.setHours(8 - ret.getHours());
        } else if (ret.getHours() > 22) {
            ret.setHours(24 - ret.getHours() + 8);
        }
        return ret;
    },
    onModifyTime: function() {
        HashLocation.push('/appointment-time?time=' + this.state.params.suggestTime.getTime());
    },
    onModifyAddress: function() {
        HashLocation.push(urlHelper.buildUrl('edit-address', {address: JSON.stringify(this.state.defaultAddress)}));
    },
    onSubmitAppointment: function() {

        if (!this.state.defaultAddress) {
            return AlertTransfer.error('请选择地址');
        }

        var time = new Date();
        var remarks = this.refs.remarks.getDOMNode().value;

        var a1 = JSON.parse(localStorage.getItem('appointment-1'));
        var a2 = JSON.parse(localStorage.getItem('appointment-2'));
        var cs = JSON.parse(localStorage.getItem('choose-suit'));
        addMaintanance(
            a1.type === 'big' ? 20 : 10,
            '1', // slipCode
            this.state.defaultAddress.id,
            a2.id,
            a2.license_plate_aleph,
            a2.license_plate,
            time.getTime(), // reservation_time
            this.state.defaultAddress.contact,
            this.state.defaultAddress.contact_phone,
            remarks, // comments
            cs.totalAmount || 0 // totalAmount
        )
            .then(() => {
                // 预约成功，删除一系列垃圾数据，然后跳转到成功页面
                localStorage.removeItem('appointment-1');
                localStorage.removeItem('appointment-2');
                localStorage.removeItem('appointment3-suggest_time');
                localStorage.removeItem('choose-suit');

                localStorage.removeItem('add-car-brand');
                localStorage.removeItem('add-car-brand_name');
                localStorage.removeItem('add-car-model');
                localStorage.removeItem('add-car-model_name');
                localStorage.removeItem('add-car-series');
                localStorage.removeItem('add-car-series_name');

                localStorage.removeItem('choose-suit');
                localStorage.removeItem('choose-suit-select-air-condition-filter');
                localStorage.removeItem('choose-suit-select-air-filter');
                localStorage.removeItem('choose-suit-select-filter');
                localStorage.removeItem('choose-suit-select-oil');

                HashLocation.push('/appointment-success?info=' + JSON.stringify());
            });

        HashLocation.push('/appointment-success?info=' + JSON.stringify({
                car: JSON.parse(localStorage.getItem('appointment-2')),
                time: time.getTime(),
                address: this.state.defaultAddress,
                remarks: remarks
            }));
    },
    getInitialState: function() {
        var time = localStorage.getItem('appointment3-suggest_time');
        time = time ? new Date(parseInt(time)) : this._getSuggestTime();

        var selectedAddress = localStorage.getItem('select-address');
        localStorage.removeItem('select-address');
        selectedAddress = selectedAddress ? JSON.parse(selectedAddress) : null;
        if (!selectedAddress) {
            getDefaultAddress()
                .then((defaultAddress) => this.setState({defaultAddress: defaultAddress}));
        }

        this.a1 = JSON.parse(localStorage.getItem('appointment-1'));

        return {
            params: {
                suggestTime: time
            },
            defaultAddress: selectedAddress
        };
    },
    render: function () {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        var defaultAddress = this.state && this.state.defaultAddress ? this.state.defaultAddress : null;
        return (
            <div className="appointment-3">
                <Header leftButton={leftButton}>预约{this.a1.type === 'small' ? '小' : '大'}保养</Header>
                <div className="content">
                    <Title>时间和地点</Title>
                    <p>
                        建议预约时间：
                        <Tap onTap={this.onModifyTime}>
                            <a>修改预约时间</a>
                        </Tap>
                    </p>
                    <p>{dateHelper.format(this.state.params.suggestTime, 'yyyy-MM-dd HH:mm')}</p>
                    <p>
                        上门服务地址：
                        <a onTouchEnd={() => HashLocation.push('/select-address')}>选择服务地址</a>
                    </p>
                    <div className="addresses">
                        {(() => {
                            if (defaultAddress) {
                                return (
                                    <p>
                                        <Radio checked={true} />
                                        <span>
                                            {defaultAddress.city + defaultAddress.district + defaultAddress.detail_address}<br />
                                            {defaultAddress.contact + ' ' + defaultAddress.contact_phone}
                                        </span>
                                        <Tap onTap={this.onModifyAddress}>
                                            <i className="ion-compose"></i>
                                        </Tap>
                                    </p>
                                );
                            }
                        })()}
                    </div>
                    <div className="remarks">
                        预约备注：
                        <textarea className="textarea" ref="remarks"></textarea>
                    </div>
                </div>
                <Button className="big-button" onTap={() => this.onSubmitAppointment()}>提交预约</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default Appointment3;