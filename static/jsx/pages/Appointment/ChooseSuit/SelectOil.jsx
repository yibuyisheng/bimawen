import React from 'react';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Reflux from 'reflux';
import { HashLocation } from 'react-router';
import { isLogin } from '../../../services/user.jsx';
import { bindTap } from '../../../common.jsx';
import { getMaintenanceItems } from '../../../services/car.jsx';
import Tap from '../../../components/Tap.jsx';

let SelectOil = React.createClass({
    onSelect: function(item) {
        localStorage.setItem('choose-suit-select-oil', JSON.stringify(item));
        HashLocation.pop();
    },
    getInitialState: function() {
        getMaintenanceItems(1)
            .then((items) => this.setState({items: items}));
        return {};
    },
    render: function() {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="select-oil-page">
                <Header leftButton={leftButton}>预约小保养</Header>
                <div className="content">
                    <Title>选择机油</Title>
                    <div className="main">
                        {renderItems.call(this)}
                    </div>
                </div>
                <Button className="big-button">确定</Button>
                <Footer></Footer>
            </div>
        );

        function renderItems() {
            var items = this.state && this.state.items ? this.state.items : [];
            return items.map((item) => {
                return (
                    <Tap onTap={() => this.onSelect(item)}>
                        <section>
                            <i style={{display:'none'}}>荐</i>
                            <div>
                                <img />
                                <p>
                                    <b>{item.display_name}</b><br />
                                    <span>{item.item_desc}</span>
                                </p>
                                <p>
                                    <b>{item.display_price}</b><br />
                                    <span>原价{item.original_price}元/升</span>
                                </p>
                            </div>
                            <i className="ion-ios-checkmark-outline" style={{display:'none'}}></i>
                        </section>
                    </Tap>
                );
            });
        }
    }
});

export default SelectOil;