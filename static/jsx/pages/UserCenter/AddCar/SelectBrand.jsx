import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';
import { getAllCarBrand } from '../../../services/car.jsx';
import { arrayHelper, base, urlHelper } from 'utilities';
import Tap from '../../../components/Tap.jsx';
import ReactRouter from 'react-router';

var SelectBrand = React.createClass({
    mixins: [ ReactRouter.State ],
    onSelect: function(brand) {
        // 将选好的数据存到 localStorage 里面
        localStorage.setItem('add-car-brand', brand.id);
        localStorage.setItem('add-car-brand_name', brand.brand_name);

        HashLocation.pop();
    },
    componentDidMount: function() {
        getAllCarBrand()
            .then((json) => {
                this.setState({
                    brands: arrayHelper.groupBy(json, (b) => { return b.brand_aleph })
                });
            });
    },
    _renderBrands: function() {
        if (!this.state || !this.state.brands) return;

        var keys = Object.keys(this.state.brands);
        var self = this;
        return keys.map((key) => {
            return (
                <section>
                    <h3>{key}</h3>
                    {this.state.brands[key].map(_renderItem)}
                </section>
            );
        });

        function _renderItem(b) {
            return (
                <Tap onTap={() => self.onSelect(b)}>
                    <p>
                        <img src="" />
                        {b.brand_name}
                        <i className="ion-chevron-right"></i>
                    </p>
                </Tap>
            );
        }
    },
    render: function() {
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
                    <div className="main">
                        {this._renderBrands()}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelectBrand;