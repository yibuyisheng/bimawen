import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';

var MyCar = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-person',
            onTap: () => {
                HashLocation.pop();
            }
        };
        var rightButton = {
            className: 'ion-ios-gear',
            onTap: () => {

            }
        };
        return (
            <div className="my-car">
                <Header leftButton={leftButton} rightButton={rightButton}>个人中心</Header>
                <div className="content">
                    <Title>我的车库</Title>
                    <div>
                        <div>
                            <h4>沪B27585&nbsp;&nbsp;&nbsp;<b>[默认]</b></h4>
                            大众朗逸1.6L 2011款
                        </div>
                        <i className="ion-ios-compose-outline"></i>
                    </div>
                    <div>
                        <div>
                            <h4>沪B27585</h4>
                            大众朗逸1.6L 2011款
                        </div>
                        <i className="ion-ios-compose-outline"></i>
                    </div>

                    <div>
                        <Button className="big-button white"
                            onTap={() => HashLocation.push('/user-center/add-car/index')}>
                            添加车辆
                        </Button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default MyCar;