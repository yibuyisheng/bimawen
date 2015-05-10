import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import Select from '../components/Select.jsx';
import { HashLocation } from 'react-router';
import ReactRouter from 'react-router';
import { dateHelper } from 'utilities';
import AlertTransfer from '../transfers/AlertTransfer.jsx';

var AppointmentTime = React.createClass({
    mixins: [ ReactRouter.State ],
    onSave: function() {
        var date = this.refs.date.getDOMNode().value;
        var hours = this.refs.hours.getDOMNode().value;
        var minutes = this.refs.minutes.getDOMNode().value;

        var dateTime = new Date(date);
        dateTime.setHours(hours);
        dateTime.setMinutes(minutes);

        if (dateTime.getTime() - 24 * 60 * 60 * 1000 < new Date().getTime()) {
            return AlertTransfer.error('服务时间离现在至少24小时');
        }
        if (dateTime.getHours() < 8 || dateTime.getHours() > 21) {
            return AlertTransfer.error('服务时间不在工作时间范围内');
        }

        localStorage.setItem('appointment3-suggest_time', dateTime.getTime());

        HashLocation.pop();
    },
    getInitialState: function() {
        var query = this.getQuery();
        return {
            time: new Date(query.time ? parseInt(query.time) : null)
        };
    },
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
                    <p className="tips">
                        为了确保您能够预约成功，<br />
                        请选择24小时后的上门服务时间。<br />
                        <em>上门服务时间：上午8点 至 晚上21点</em>
                    </p>
                    <p>设定预约时间：</p>
                    <p>
                        <input type="date" ref="date" defaultValue={dateHelper.format(this.state.time, 'yyyy-MM-dd')} />
                        <i className="ion-ios-calendar-outline" />
                    </p>
                    <p>
                        <Select ref="hours" defaultValue={this.state.time.getHours()}>
                            {_options(24)}
                        </Select>
                        点
                        <Select ref="minutes" defaultValue={this.state.time.getMinutes()}>
                            {_options(60)}
                        </Select>
                        分
                    </p>
                </div>
                <Button className="big-button" onTap={this.onSave}>保存预约时间</Button>
                <Footer></Footer>
            </div>
        );

        function _options(size) {
            var ret = [];
            for (var i = 0; i < size; i++) {
                ret.push((<option value={i}>{i}</option>));
            }
            return ret;
        }
    }
});

export default AppointmentTime;