import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';
import Radio from '../../components/Radio.jsx';
import { dateHelper } from 'utilities';
import ReactRouter from 'react-router';
import { getMyAddresses, saveAddress } from '../../services/user.jsx';
import Tap from '../../components/Tap.jsx';
import Select from '../../components/Select.jsx';
import addons from 'react-addons';
import { send } from '../../services/verifyCode.jsx';
import { getRegions } from '../../services/car.jsx';
import AlertTransfer from '../../transfers/AlertTransfer.jsx';

var EditAddress = React.createClass({
    sendCode: function() {
        if (this.state.verifyCodeButton.counter) {
            return;
        }

        send(this.refs.mobile.getDOMNode().value)
            .then(timer)
            .catch((error) => {
                AlertTransfer.show(error.message, '错误');
            });

        var self = this;
        function timer() {
            var verifyCodeButton;

            var counter = self.state.verifyCodeButton.counter;
            counter = counter ? (--counter) : 60;
            if (counter > 0) {
                verifyCodeButton = {
                    counter: counter,
                    text: counter + '秒后可重新发送'
                };
                setTimeout(timer, 1000);
            } else {
                verifyCodeButton = {
                    counter: null,
                    text: '获取验证码'
                };
            }

            if (self.isMounted()) {
                self.setState({
                    verifyCodeButton: verifyCodeButton
                });
            }
        }
    },
    onAddAddress: function() {
        HashLocation.push();
    },
    onCityChange: function() {
        this.setState({
            currentCityName: this.refs.city.getDOMNode().value
        });
    },
    onSave: function() {
        saveAddress(
            this.refs.city.getDOMNode().value,
            this.refs.region.getDOMNode().value,
            this.refs.detailAddress.getDOMNode().value,
            this.refs.contact.getDOMNode().value,
            this.refs.mobile.getDOMNode().value
        ).then(() => alert('成功'));
    },
    _renderCities: function() {
        if (!this.regions) return;
        return this.regions.map((region) => {
            return (<option>{region.name}</option>);
        });
    },
    _renderRegions: function(currentCityName) {
        if (!this.regions) return;
        var regions;
        for (var i = 0, il = this.regions.length; i < il; i++) {
            if (this.regions[i].name === currentCityName) {
                regions = this.regions[i].cities;
            }
        }
        if (!regions) return;
        return regions.map((region) => {
            return (<option>{region}</option>);
        });
    },
    getInitialState: function() {
        getRegions()
            .then((json) => {
                this.regions = json;
                this.setState({
                    currentCityName: json[0].name
                });
            });
        return {
            verifyCodeButton: {
                text: '获取验证码',
                counter: null
            }
        };
    },
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        var verifyCodeButtonClass = addons.classSet({
            'normal-button': true,
            'disabled': !!this.state.verifyCodeButton.counter
        });

        return (
            <div className="edit-address">
                <Header leftButton={leftButton}>预约小保养</Header>
                <div className="content">
                    <Title>编辑地址</Title>
                    <div className="main">
                        <div>
                            <Select ref="city" onChange={this.onCityChange}>
                                {this._renderCities()}
                            </Select>
                            <Select ref="region">
                                {this._renderRegions(this.state.currentCityName)}
                            </Select>
                        </div>
                        <div>
                            <textarea ref="detailAddress" placeholder="详细地址"></textarea>
                        </div>
                        <div>
                            <label>联系人</label>
                            <input type="text" ref="contact" />
                        </div>
                        <div>
                            <label>联系电话</label>
                            <input type="text" ref="mobile" />
                        </div>
                        <div>
                            <input type="text" />
                            <Button className={verifyCodeButtonClass} onTap={this.sendCode}>
                                {this.state.verifyCodeButton.text}
                            </Button>
                        </div>
                        <div className="default-box">
                            <Tap onTap={() => this.setState({isDefault: !this.state.isDefault})}>
                                <i className={addons.classSet('ion-ios-checkmark-outline', this.state.isDefault ? 'on' : '')}></i>
                                设置为默认地址
                            </Tap>
                        </div>
                    </div>
                </div>
                <Button className="big-button" onTap={this.onSave}>保存地址</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default EditAddress;