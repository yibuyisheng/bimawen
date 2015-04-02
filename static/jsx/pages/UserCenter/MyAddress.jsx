import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';
import { HashLocation } from 'react-router';

var MyAddress = React.createClass({
    render: function() {
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
            <div className="my-address">
                <Header leftButton={leftButton} rightButton={rightButton}>个人中心</Header>
                <div className="content">
                    <Title>我的地址</Title>
                    <ul className="list">
                        <li>
                            <p>
                                上海市普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </p>
                            <i className="ion-ios-arrow-right"></i>
                        </li>
                        <li>
                            <p>
                                上海市普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </p>
                            <i className="ion-ios-arrow-right"></i>
                        </li>
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default MyAddress;