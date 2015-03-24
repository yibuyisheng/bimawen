import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

var Index = React.createClass({
    render: () => {
        return (
            <div className="user-center-index">
                <Header>个人中心</Header>
                <div className="content">
                    <div>
                        <i>icon</i>
                        <h3>预约服务</h3>
                        <b>15</b>
                    </div>
                    <div>
                        <i>icon</i>
                        <h3>紧急服务</h3>
                        <b>7</b>
                    </div>
                    <div>
                        <i>icon</i>
                        <h3>我的车辆</h3>
                        <b>1</b>
                    </div>
                    <div>
                        <i>icon</i>
                        <h3>我的地址</h3>
                        <b>5</b>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default Index;