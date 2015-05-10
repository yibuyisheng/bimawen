import React from 'react';
import { HashLocation } from 'react-router';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Title from '../../../components/Title.jsx';
import Button from '../../../components/Button.jsx';
import Select from '../../../components/Select.jsx';
import addons from 'react-addons';
import ReactRouter from 'react-router';
import { urlHelper } from 'utilities';
import Tap from '../../../components/Tap.jsx';
import { getAddresses, addCar } from '../../../services/car.jsx';
import AlertTransfer from '../../../transfers/AlertTransfer.jsx';

var Index = React.createClass({
    mixins: [ ReactRouter.State ],
    _toSelectPage: function(index) {
        var btnObj = this.state.selectButtons[index];
        if (btnObj.status === 'wait') {
            return;
        }

        var toUrl = btnObj.to;
        toUrl = urlHelper.buildUrl(toUrl, this.state.selected);

        HashLocation.push(toUrl.replace(/\?$/, ''));
    },
    onAddCar: function() {
        var query = this.state.selected;
        addCar(
            query.model,
            this.refs.abbreviation.getDOMNode().value,
            this.refs.licensePlate.getDOMNode().value,
            query.brand_name + ' ' + query.series_name + ' ' + query.model_name,
            this.state.isDefault
        ).then(() => {
            AlertTransfer.show('操作成功', '成功');
            this._clearSelected();
        }, (error) => AlertTransfer.error(error.message));
    },
    getInitialState: function() {
        var selectButtons = [
            {status: 'current', text: '选择品牌', to: '/user-center/add-car/select-brand'},
            {status: 'wait', text: '选择车系', to: '/user-center/add-car/select-series'},
            {status: 'wait', text: '选择型号', to: '/user-center/add-car/select-model'}
        ];
        var selected = {
            brand: localStorage.getItem('add-car-brand'),
            brand_name: localStorage.getItem('add-car-brand_name'),
            series: localStorage.getItem('add-car-series'),
            series_name: localStorage.getItem('add-car-series_name'),
            model: localStorage.getItem('add-car-model'),
            model_name: localStorage.getItem('add-car-model_name')
        };

        return {
            selectButtons: selectButtons,
            selected: selected
        };
    },
    _clearSelected: function() {
        localStorage.removeItem('add-car-brand');
        localStorage.removeItem('add-car-brand_name');
        localStorage.removeItem('add-car-series');
        localStorage.removeItem('add-car-series_name');
        localStorage.removeItem('add-car-model');
        localStorage.removeItem('add-car-model_name');
    },
    componentDidMount: function() {
        var params = this.state.selected;
        var selectButtons = this.state.selectButtons;
        if (params.brand) {
            selectButtons[0].status = 'ready';
            selectButtons[1].status = 'current';
            selectButtons[2].status = 'wait';

            selectButtons[0].text = params.brand_name;
        }
        if (params.series) {
            selectButtons[0].status = 'ready';
            selectButtons[1].status = 'ready';
            selectButtons[2].status = 'current';

            selectButtons[0].text = params.brand_name;
            selectButtons[1].text = params.series_name;
        }
        if (params.model) {
            selectButtons[0].status = 'ready';
            selectButtons[1].status = 'ready';
            selectButtons[2].status = 'ready';

            selectButtons[0].text = params.brand_name;
            selectButtons[1].text = params.series_name;
            selectButtons[2].text = params.model_name;
        }
        this.setState({selectButtons: selectButtons});

        // 获取省份简称
        getAddresses()
            .then((json) => this.setState({addresses: json}));
    },
    render: function () {
        var selectButtons = this.state.selectButtons;
        var leftButton = {
            className: 'ion-chevron-left',
            onTap: () => {
                HashLocation.pop();
            }
        };
        return (
            <div className="user-center-add-car-index">
                <Header leftButton={leftButton}>
                    我的车库
                </Header>
                <div className="content">
                    <Title>添加我的车辆</Title>
                    <p>
                        添加车辆可以帮助我们为您推荐合适的保养耗材。
                    </p>
                    <Button className={addons.classSet('big-button', selectButtons[0].status)}
                        onTap={() => {this._toSelectPage(0)}}>
                        {selectButtons[0].text}
                        <i className="ion-chevron-right"></i>
                    </Button>
                    <Button className={addons.classSet('big-button', selectButtons[1].status)}
                        onTap={() => {this._toSelectPage(1)}}>
                        {selectButtons[1].text}
                        <i className="ion-chevron-right"></i>
                    </Button>
                    <Button className={addons.classSet('big-button', selectButtons[2].status)}
                        onTap={() => {this._toSelectPage(2)}}>
                        {selectButtons[2].text}
                        <i className="ion-chevron-right"></i>
                    </Button>
                    <div className="number">
                        <Select ref="abbreviation">
                            {_address.call(this)}
                        </Select>
                        <input type="text" ref="licensePlate" />
                    </div>
                    <div className="default-box">
                        <Tap onTap={() => this.setState({isDefault: !this.state.isDefault})}>
                            <i className={addons.classSet('ion-ios-checkmark-outline', this.state.isDefault ? 'on' : '')}></i>
                            设置为默认车辆
                        </Tap>
                    </div>
                    <div className="space"></div>
                    <Button className="big-button" onTap={this.onAddCar}>添加车辆</Button>
                </div>
                <Footer></Footer>
            </div>
        );

        function _address() {
            if (!this.state || !this.state.addresses) return;

            return this.state.addresses.map((address) => (<option value={address.abbreviation}>{address.abbreviation}</option>));
        }
    }
});

export default Index;