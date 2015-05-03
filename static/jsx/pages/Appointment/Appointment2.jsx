import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import Select from '../../components/Select.jsx';
import { HashLocation } from 'react-router';
import { getMyCars } from '../../services/car.jsx';
import addons from 'react-addons';

var Appointment2 = React.createClass({
    nextStep: function () {
        HashLocation.push('/appointment-3');
    },
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        getMyCars()
            .then((cars) => {
                this.setState({
                    cars: cars
                });
            }, (error) => {
                alert(error.message ? error.message : '未知错误');
            });
    },
    _renderCar: function(cars) {
        if (!cars || !cars.length) {
            return (<p className="no-car">您还没有添加车辆</p>);
        }

        return (
            cars.map((car) => {
                var carClass = addons.classSet({
                    'car': true,
                    'selected': !!car.selected
                });

                return (
                    <div className={carClass}>
                        <section>
                            <h3>沪C 45H5F</h3>
                            <p>马自达 CX-5 2014款 2.0L</p>
                        </section>
                        <i className="ion-ios-compose-outline"></i>
                    </div>
                );
            })
        );
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
                        {this._renderCar(this.state.cars)}
                        <Button className="big-button white blue-border"
                            onTap={() => {HashLocation.push('/user-center/add-car')}}>
                            添加车辆
                        </Button>
                    </div>
                </div>
                <Button className="big-button" onTap={this.nextStep}>下一步</Button>
                <Footer></Footer>
            </div>
        );
    }
});

export default Appointment2;