import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';

var Index = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-person',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="user-center-add-car-index">
                <Header leftButton={leftButton}>
                    我的车库
                </Header>
                <div className="content">
                    <Title>添加我的车辆</Title>
                    <p>
                        添加车辆可以帮助我们为您推荐合适的保养耗材。
                    </p>
                    <Button className="big-button white"
                        onTap={() => HashLocation.push('/user-center/add-car/select-brand')}>
                        选择品牌
                        <i className="ion-chevron-right"></i>
                    </Button>
                    <Button className="big-button white">
                        选择车系
                        <i className="ion-chevron-right"></i>
                    </Button>
                    <Button className="big-button white">
                        选择型号
                        <i className="ion-chevron-right"></i>
                    </Button>
                    <div className="number">
                        <Select>
                            <option>沪</option>
                        </Select>
                        <input type="text" />
                    </div>
                    <div className="space"></div>
                    <Button className="big-button">添加车辆</Button>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default Index;