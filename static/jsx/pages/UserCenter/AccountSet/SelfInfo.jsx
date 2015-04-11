import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';

var SelfInfo = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="user-center-account-set-self-info">
                <Header leftButton={leftButton}>
                    个人中心
                </Header>
                <div className="content">
                    <Title>个人信息</Title>
                    <input type="text" placeholder="您的名字" />
                    <Select placeholder="性别">
                        <option>男</option>
                        <option>女</option>
                    </Select>
                    <div className="space"></div>
                    <Button className="big-button">保存</Button>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelfInfo;