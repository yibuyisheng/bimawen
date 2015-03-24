import React from 'react';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import Title from '../../components/Title.jsx';
import Button from '../../components/Button.jsx';

var MyCar = React.createClass({
    render: () => {
        return (
            <div className="my-car">
                <Header>个人中心</Header>
                <div className="content">
                    <Title>我的车辆</Title>
                    <div>
                        <div>
                            <h4>沪B27585</h4>
                            大众朗逸1.6L 2011款
                        </div>
                        <i>icon</i>
                    </div>
                    <div>
                        <div>
                            <h4>沪B27585</h4>
                            大众朗逸1.6L 2011款
                        </div>
                        <i>icon</i>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default MyCar;