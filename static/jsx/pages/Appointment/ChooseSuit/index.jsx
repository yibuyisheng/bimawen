import React from 'react';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';
import { isLogin } from '../../../services/user.jsx';
import { bindTap } from '../../../common.jsx';

let ChooseSuit = React.createClass({
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
            <div className="choose-suit-page">
                <Header>预约小保养</Header>
                <div className="content">
                    <Title>选择套餐</Title>
                    <div className="main">
                        <section>
                            <img />
                            <p>
                                <b>机油</b><br />
                                <span>美孚 银装一号</span>
                            </p>
                            <p>
                                <b>100元/升（4升）</b><br />
                                <span>原价130元/升</span>
                            </p>
                            <i className="ion-chevron-right"></i>
                        </section>
                        <section>
                            <img />
                            <p>
                                <b>机滤</b><br />
                                <span>索菲玛</span>
                            </p>
                            <p>
                                <b>48元</b><br />
                                &nbsp;
                            </p>
                            <i className="ion-chevron-right"></i>
                        </section>
                        <section style={{display: this.state.type === 'small' ? 'none' : 'flex'}}>
                            <img />
                            <p>
                                <b>空气滤</b><br />
                                <span>索菲玛</span>
                            </p>
                            <p>
                                <b>48元</b><br />
                                &nbsp;
                            </p>
                            <i className="ion-chevron-right"></i>
                        </section>
                        <section style={{display: this.state.type === 'small' ? 'none' : 'flex'}}>
                            <img />
                            <p>
                                <b>空调滤</b><br />
                                <span>索菲玛</span>
                            </p>
                            <p>
                                <b>48元</b><br />
                                &nbsp;
                            </p>
                            <i className="ion-chevron-right"></i>
                        </section>
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
                            <span>458元</span>
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