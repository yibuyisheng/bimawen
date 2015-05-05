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

var SelectAddress = React.createClass({
    onAddAddress: function() {
        HashLocation.push('edit-address');
    },
    getInitialState: function() {
        getMyAddresses()
            .then((addresses) => {
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
                            (
                                <p>
                                    <Radio />
                                    <span>
                                        {address.city + address.district + address.detail_address}<br />
                                        {address.contact + ' ' + address.contact_phone}
                                    </span>
                                    <i className="ion-compose"></i>
                                </p>
                            )
                        })}
                        <div className="add-address-box">
                            <Tap onTap={this.onAddAddress}>+添加地址</Tap>
                        </div>
                    </div>
                </div>
                <Button className="big-button">选择预约地址</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelectAddress;