import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';
import { getSeries } from '../../../services/car.jsx';
import ReactRouter from 'react-router';
import Tap from '../../../components/Tap.jsx';
import { urlHelper, base } from 'utilities';

var SelectSeries = React.createClass({
    mixins: [ ReactRouter.State ],
    onSelect: function(s) {
        localStorage.setItem('add-car-series', s.id);
        localStorage.setItem('add-car-series_name', s.series_name);

        HashLocation.pop();
    },
    componentDidMount: function() {
        getSeries(this.getQuery().brand)
            .then((json) => {
                this.setState({
                    series: json
                });
            });
    },
    _renderSeries: function() {
        if (!this.state || !this.state.series) {
            return;
        }

        return this.state.series.map((s) => {
            return (
                <Tap onTap={() => this.onSelect(s)}>
                    <p>
                        {s.series_name}
                        <i className="ion-chevron-right"></i>
                    </p>
                </Tap>
            );
        });
    },
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
                    <div className="main">
                        {this._renderSeries()}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelectSeries;