import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';

var MyAddress = React.createClass({
    render: function() {
        return (
            <div className="my-address">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>我的车辆</Title>
                    <ul className="list">
                        <li>
                            <p>
                                上海市普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </p>
                            <i>icon</i>
                        </li>
                        <li>
                            <p>
                                上海市普陀区棕榈路212弄36号303室<br />
                                顾刚 15001750001
                            </p>
                            <i>icon</i>
                        </li>
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default MyAddress;