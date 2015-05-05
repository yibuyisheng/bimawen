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
    getInitialState: function() {
        var time = localStorage.getItem('appointment3-suggest_time');
        time = time ? new Date(parseInt(time)) : this._getSuggestTime();
        return {
            params: {
                suggestTime: time
            }
        };
    },
    componentDidMount: function() {
        getDefaultAddress()
            .then((defaultAddress) => this.setState({defaultAddress: defaultAddress}));
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
                <Header leftButton={leftButton}>预约</Header>
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
                                        <i className="ion-compose"></i>
                                    </p>
                                );
                            }
                        })()}
                    </div>
                    <div className="remarks">
                        预约备注：
                        <textarea className="textarea"></textarea>
                    </div>
                </div>
                <Button className="big-button" onTap={() => HashLocation.push('/appointment-success')}>提交预约</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default Appointment3;