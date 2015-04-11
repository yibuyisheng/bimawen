import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';

var Index = React.createClass({
    render: function () {
        var leftButton = {
            className: 'ion-person',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="user-center-account-set-index">
                <Header leftButton={leftButton}>
                    个人中心
                </Header>
                <div className="content">
                    <Title>账号设置</Title>
                    <Button className="big-button blue-border white"
                        onTap={() => HashLocation.push('/user-center/account-set/self-info')}>
                        基本信息
                    </Button>
                    <Button className="big-button blue-border white"
                        onTap={() => HashLocation.push('/user-center/account-set/modify-phone')}>
                        修改注册手机号码
                    </Button>
                    <div className="space"></div>
                    <Button className="big-button white">退出登录</Button>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default Index;