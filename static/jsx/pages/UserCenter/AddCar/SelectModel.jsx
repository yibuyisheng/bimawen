import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';
import { getModels } from '../../../services/car.jsx';
import Tap from '../../../components/Tap.jsx';
import ReactRouter from 'react-router';
import { urlHelper, base } from 'utilities';

var SelectModel = React.createClass({
    mixins: [ ReactRouter.State ],
    onSelect: function(model) {
        localStorage.setItem('add-car-model', model.id);
        localStorage.setItem('add-car-model_name', model.model_name);

        HashLocation.pop();
    },
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        getModels(this.getQuery().series)
            .then((json) => this.setState({models: json}));
    },
    render: function () {
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        var models = this.state && this.state.models ? this.state.models : [];
        return (
            <div className="user-center-add-car-select-series">
                <Header leftButton={leftButton}>
                    我的车库
                </Header>
                <div className="content">
                    <Title>选择车系</Title>
                    {models.map((m) => {
                        return (
                            <Tap onTap={() => this.onSelect(m)}>
                                <p>
                                    {m.model_name}
                                </p>
                            </Tap>
                        )
                    })}
                </div>
                <Footer></Footer>
            </div>
        );
    }
});

export default SelectModel;