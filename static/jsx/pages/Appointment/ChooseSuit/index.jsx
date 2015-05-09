import React from 'react';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';
import { isLogin } from '../../../services/user.jsx';
import { bindTap } from '../../../common.jsx';
import Tap from '../../../components/Tap.jsx';

let ChooseSuit = React.createClass({
    onSelectOil: function() {
        HashLocation.push('/choose-suit/select-oil?oil=' + JSON.stringify(this.state.oil));
    },
    onSelectFilter: function() {
        HashLocation.push('/choose-suit/select-filter?filter=' + JSON.stringify(this.state.filter));
    },
    onSelectAirFilter: function() {
        HashLocation.push('/choose-suit/select-air-filter?airFilter=' + JSON.stringify(this.state.airFilter));
    },
    onSelectAirConditionFilter: function() {
        HashLocation.push('/choose-suit/select-air-condition-filter?airFilter=' + JSON.stringify(this.state.airConditionFilter));
    },
    goAppointment: function() {
        localStorage.setItem('choose-suit', JSON.stringify({
            oil: this.state.oil,
            filter: this.state.filter,
            airFilter: this.state.airFilter,
            airConditionFilter: this.state.airConditionFilter,
            totalAmount: this._totalPrice()
        }));
        HashLocation.push('/appointment-3');
    },
    _totalPrice: function() {
        var oil = this.state && this.state.oil ? this.state.oil : {};
        var filter = this.state && this.state.filter ? this.state.filter : {};
        var airFilter = this.state && this.state.airFilter ? this.state.airFilter : {};
        var airConditionFilter = this.state && this.state.airConditionFilter ? this.state.airConditionFilter : {};

        if (this.state.type === 'small') {
            return small();
        }
        return small() + (airFilter.price || 0) + (airConditionFilter.price || 0);

        function small() {
            return (oil.price || 0) + (filter.price || 0) + 28
        }
    },
    getInitialState: function () {
        var a1 = JSON.parse(localStorage.getItem('appointment-1'));

        var oil = localStorage.getItem('choose-suit-select-oil');
        oil = oil ? JSON.parse(oil) : null;

        var filter = localStorage.getItem('choose-suit-select-filter');
        filter = filter ? JSON.parse(filter) : null;

        var airFilter = localStorage.getItem('choose-suit-select-air-filter');
        airFilter = airFilter ? JSON.parse(airFilter) : null;

        var airConditionFilter = localStorage.getItem('choose-suit-select-air-condition-filter');
        airConditionFilter = airFilter ? JSON.parse(airConditionFilter) : null;

        return {
            showSmallUpkeep: true,
            showBigUpkeep: false,
            type: a1.type,
            oil: oil,
            filter: filter,
            airFilter: airFilter,
            airConditionFilter: airConditionFilter
        };
    },
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        var oil = this.state && this.state.oil ? this.state.oil : {};
        var filter = this.state && this.state.filter ? this.state.filter : {};
        var airFilter = this.state && this.state.airFilter ? this.state.airFilter : {};
        var airConditionFilter = this.state && this.state.airConditionFilter ? this.state.airConditionFilter : {};
        return (
            <div className="choose-suit-page">
                <Header leftButton={leftButton}>预约{this.state.type === 'small' ? '小' : '大'}保养</Header>
                <div className="content">
                    <Title>选择套餐</Title>
                    <div className="main">
                        <Tap onTap={this.onSelectOil}>
                            <section>
                                <img />
                                <p>
                                    <b>机油</b><br />
                                    <span>{oil.display_name}</span>
                                </p>
                                <p>
                                    <b>{oil.display_price}</b><br />
                                    <span>{oil.original_price ? ('原价' + oil.original_price + '元/升') : ''}</span>
                                </p>
                                <i className="ion-chevron-right"></i>
                            </section>
                        </Tap>
                        <Tap onTap={this.onSelectFilter}>
                            <section>
                                <img />
                                <p>
                                    <b>机滤</b><br />
                                    <span>{filter.item_brand}</span>
                                </p>
                                <p>
                                    <b>{filter.price ? (filter.price + '元') : ''}</b><br />
                                    &nbsp;
                                </p>
                                <i className="ion-chevron-right"></i>
                            </section>
                        </Tap>
                        <Tap onTap={this.onSelectAirFilter}>
                            <section style={{display: this.state.type === 'small' ? 'none' : 'flex'}}>
                                <img />
                                <p>
                                    <b>空气滤</b><br />
                                    <span>{airFilter.item_brand}</span>
                                </p>
                                <p>
                                    <b>{airFilter.price ? (airFilter.price + '元') : ''}</b><br />
                                    &nbsp;
                                </p>
                                <i className="ion-chevron-right"></i>
                            </section>
                        </Tap>
                        <Tap onTap={this.onSelectAirConditionFilter}>
                            <section style={{display: this.state.type === 'small' ? 'none' : 'flex'}}>
                                <img />
                                <p>
                                    <b>空调滤</b><br />
                                    <span>{airConditionFilter.item_brand}</span>
                                </p>
                                <p>
                                    <b>{airConditionFilter.price ? (airConditionFilter.price + '元') : ''}</b><br />
                                    &nbsp;
                                </p>
                                <i className="ion-chevron-right"></i>
                            </section>
                        </Tap>
                        <section>
                            <img />
                            <p>
                                <b>人工费</b><br />
                                <span>&nbsp;</span>
                            </p>
                            <p>
                                <b>28元</b><br />
                                <span>原价128元</span>
                            </p>
                        </section>
                        <div className="total-box">
                            <span>合计</span>
                            <span>{this._totalPrice()}元</span>
                        </div>
                    </div>
                </div>
                <Button className="big-button" onTap={this.goAppointment}>下一步</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default ChooseSuit;