import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';

var MyInfo = React.createClass({
    render: function() {
        return (
            <div className="my-info">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>我的资料</Title>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default MyInfo;