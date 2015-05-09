import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import Select from '../../components/Select.jsx';
import { HashLocation } from 'react-router';
import { getMyCars } from '../../services/car.jsx';
import addons from 'react-addons';
import Tap from '../../components/Tap.jsx';
import AlertTransfer from '../../transfers/AlertTransfer.jsx';

var Appointment2 = React.createClass({
    nextStep: function () {
        var selectedCar = this.state.cars.filter((car) => {
            return car.selected;
        });
        selectedCar = selectedCar && selectedCar.length ? selectedCar[0] : null;
        if (!selectedCar) {
            return AlertTransfer.show('请选择车辆', '错误');
        }

        localStorage.setItem('appointment-2', JSON.stringify(selectedCar));
        HashLocation.push('/choose-suit');
    },
    onModify: function() {},
    onSelectChange: function(car) {
        var cars = this.state.cars;
        cars.forEach((item) => {
            item.selected = item === car;
        });
        this.setState({cars: cars});
    },
    getInitialState: function() {
        getMyCars()
            .then((cars) => {
                this.setState({
                    cars: cars.sort((a, b) => b.is_default - a.is_default).map((car) => {
                        car.selected = car.is_default;
                        return car;
                    })
                });
            }, (error) => {
                AlertTransfer.show(error.message ? error.message : '未知错误', '错误');
            });

        this.a1 = JSON.parse(localStorage.getItem('appointment-1'));
        return {};
    },
    _renderCar: function(cars) {
        if (!cars || !cars.length) {
            return (<p className="no-car">您还没有添加车辆</p>);
        }

        return (
            cars.map((car) => {
                var carClass = addons.classSet({
                    car: true,
                    selected: car.selected
                });

                return (
                    <Tap onTap={() => this.onSelectChange(car)}>
                        <div className={carClass}>
                            <section>
                                <h3>{car.license_plate_aleph + car.license_plate}</h3>
                                <p>{car.car_info}</p>
                            </section>
                            <Tap onTap={this.onModify}>
                                <i className="ion-ios-compose-outline"></i>
                            </Tap>
                        </div>
                    </Tap>
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
                <Header leftButton={leftButton}>预约{this.a1.type === 'small' ? '小' : '大'}保养</Header>
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