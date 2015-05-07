import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';
import Radio from '../../components/Radio.jsx';
import { dateHelper } from 'utilities';
import ReactRouter from 'react-router';
import { getMyAddresses } from '../../services/user.jsx';
import Tap from '../../components/Tap.jsx';
import addons from 'react-addons';
import { urlHelper } from 'utilities';

var SelectAddress = React.createClass({
    onAddAddress: function() {
        HashLocation.push('edit-address');
    },
    onModifyAddress: function(address) {
        HashLocation.push(urlHelper.buildUrl('edit-address', {address: JSON.stringify(address)}));
    },
    onSelectChange: function(address) {
        var addresses = this.state.addresses;
        addresses.forEach((item) => {
            item.selected = item === address;
        });
        this.setState({addresses: addresses});
    },
    onConfirm: function() {
        var selectedAddress = this.state.addresses.filter((address) => {
            return address.selected;
        });
        selectedAddress = selectedAddress && selectedAddress.length ? selectedAddress[0] : null;
        if (!selectedAddress) {
            return AlertTransfer.error('请选择地址');
        }

        localStorage.setItem('select-address', JSON.stringify(selectedAddress));
        HashLocation.pop();
    },
    getInitialState: function() {
        getMyAddresses()
            .then((addresses) => {
                addresses.map(function(address) {
                    address.selected = address.add_status;
                });
                this.setState({addresses: addresses});
            });
        return {};
    },
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        var addresses = this.state && this.state.addresses ? this.state.addresses : [];
        return (
            <div className="select-address">
                <Header leftButton={leftButton}>预约小保养</Header>
                <div className="content">
                    <Title>预约地址</Title>
                    <div className="main">
                        {addresses.map((address) => {
                            return (
                                <p className={addons.classSet({selected: address.selected})}>
                                    <Radio checked={address.selected} onChange={() => this.onSelectChange(address)}/>
                                    <span>
                                        {address.city + address.district + address.detail_address}<br />
                                        {address.contact + ' ' + address.contact_phone}
                                    </span>
                                    <Tap onTap={() => this.onModifyAddress(address)}>
                                        <i className="ion-compose"></i>
                                    </Tap>
                                </p>
                            )
                        })}
                        <div className="add-address-box">
                            <Tap onTap={this.onAddAddress}>+添加地址</Tap>
                        </div>
                    </div>
                </div>
                <Button className="big-button" onTap={this.onConfirm}>选择预约地址</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelectAddress;