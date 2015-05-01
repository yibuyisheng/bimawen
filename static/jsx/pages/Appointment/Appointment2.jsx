import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import Select from '../../components/Select.jsx';
import { HashLocation } from 'react-router';

var Appointment2 = React.createClass({
    nextStep: function () {
        HashLocation.push('/appointment-3');
    },
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="appointment-2">
                <Header leftButton={leftButton}>预约小保养</Header>
                <div className="content">
                    <Title>车辆信息</Title>
                    <div className="main">
                        <p className="no-car">您还没有添加车辆</p>
                        <div className="car">
                            <section>
                                <h3>沪C 45H5F</h3>
                                <p>马自达 CX-5 2014款 2.0L</p>
                            </section>
                            <i className="ion-ios-compose-outline"></i>
                        </div>
                        <div className="car selected">
                            <section>
                                <h3>沪C 45H5F</h3>
                                <p>马自达 CX-5 2014款 2.0L</p>
                            </section>
                            <i className="ion-ios-compose-outline"></i>
                        </div>
                        <Button className="big-button white blue-border">添加车辆</Button>
                    </div>
                </div>
                <Button className="big-button" onTap={this.nextStep}>下一步</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default Appointment2;