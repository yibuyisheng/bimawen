import React from 'react';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';
import { isLogin } from '../../../services/user.jsx';
import { bindTap } from '../../../common.jsx';

let SelectOil = React.createClass({
    getInitialState: function () {
        var a1 = JSON.parse(localStorage.getItem('appointment-1'));
        return {
            showSmallUpkeep: true,
            showBigUpkeep: false,
            type: a1.type
        };
    },
    render: function() {
        return (
            <div className="select-oil-page">
                <Header>预约小保养</Header>
                <div className="content">
                    <Title>选择机油</Title>
                    <div className="main">
                        <section>
                            <i>荐</i>
                            <div>
                                <img />
                                <p>
                                    <b>美孚 金装1号</b><br />
                                    <span>0W-40 SN级</span>
                                </p>
                                <p>
                                    <b>100元/升</b><br />
                                    <span>原价120元/升</span>
                                </p>
                            </div>
                            <i className="ion-ios-checkmark-outline"></i>
                        </section>
                    </div>
                </div>
                <Button className="big-button" onTap={this.goAppointment}>下一步</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelectOil;