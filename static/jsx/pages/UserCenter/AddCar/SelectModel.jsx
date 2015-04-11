import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';

var SelectModel = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="user-center-add-car-select-series">
                <Header leftButton={leftButton}>
                    我的车库
                </Header>
                <div className="content">
                    <Title>选择车系</Title>
                    <p>
                        2014款 2.0
                    </p>
                    <p>
                        马自达2
                    </p>
                    <p>
                        马自达3
                    </p>
                    <p>
                        马自达4
                    </p>
                    <p>
                        马自达5
                    </p>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelectModel;