import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';

var SelectBrand = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="user-center-add-car-select-brand">
                <Header leftButton={leftButton}>
                    我的车库
                </Header>
                <div className="content">
                    <Title>选择品牌</Title>
                    <h3>A</h3>
                    <p>
                        <img src="" />
                        奥迪
                        <i className="ion-chevron-right"></i>
                    </p>
                    <h3>B</h3>
                    <p>
                        <img src="" />
                        宝骏
                        <i className="ion-chevron-right"></i>
                    </p>
                    <p>
                        <img src="" />
                        宝马
                        <i className="ion-chevron-right"></i>
                    </p>
                    <p>
                        <img src="" />
                        保时捷
                        <i className="ion-chevron-right"></i>
                    </p>
                    <p>
                        <img src="" />
                        奔驰
                        <i className="ion-chevron-right"></i>
                    </p>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelectBrand;