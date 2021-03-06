import ReactRouter from 'react-router';
import React from 'react';

import Appointment1 from './pages/Appointment/Appointment1.jsx';
import Appointment2 from './pages/Appointment/Appointment2.jsx';
import Appointment3 from './pages/Appointment/Appointment3.jsx';
import AppointmentSuccess from './pages/Appointment/AppointmentSuccess.jsx';
import SelectAddress from './pages/Appointment/SelectAddress.jsx';
import EditAddress from './pages/Appointment/EditAddress.jsx';
import ChooseSuit from './pages/Appointment/ChooseSuit/index.jsx';
import SelectOil from './pages/Appointment/ChooseSuit/SelectOil.jsx';
import SelectFilter from './pages/Appointment/ChooseSuit/SelectFilter.jsx';
import SelectAirFilter from './pages/Appointment/ChooseSuit/SelectAirFilter.jsx';
import SelectAirConditionFilter from './pages/Appointment/ChooseSuit/SelectAirConditionFilter.jsx';

import AppointmentTime from './pages/AppointmentTime.jsx';
import AppointmentAddress from './pages/AppointmentAddress.jsx';
import LoginVerifyCode from './pages/LoginVerifyCode.jsx';
import Login from './pages/Login.jsx';

import AppointmentEmergency1 from './pages/AppointmentEmergency/AppointmentEmergency1.jsx';
import AppointmentEmergency2 from './pages/AppointmentEmergency/AppointmentEmergency2.jsx';
import AppointmentEmergencySuccess from './pages/AppointmentEmergency/AppointmentEmergencySuccess.jsx';

import UserCenterIndex from './pages/UserCenter/Index.jsx';
import AppointmentHistory from './pages/UserCenter/AppointmentHistory.jsx';
import AppointmentEmergencyHistory from './pages/UserCenter/AppointmentEmergencyHistory.jsx';
import MyCar from './pages/UserCenter/MyCar.jsx';
import MyAddress from './pages/UserCenter/MyAddress.jsx';
import MyInfo from './pages/UserCenter/MyInfo.jsx';
import AccountSetIndex from './pages/UserCenter/AccountSet/Index.jsx';
import SelfInfo from './pages/UserCenter/AccountSet/SelfInfo.jsx';
import ModifyPhone from './pages/UserCenter/AccountSet/ModifyPhone.jsx';
import AddCarIndex from './pages/UserCenter/AddCar/Index.jsx';
import SelectBrand from './pages/UserCenter/AddCar/SelectBrand.jsx';
import SelectSeries from './pages/UserCenter/AddCar/SelectSeries.jsx';
import SelectModel from './pages/UserCenter/AddCar/SelectModel.jsx';
import Flow from './pages/Flow.jsx';
import CheckDetail from './pages/CheckDetail.jsx';
import Alert from './components/Alert.jsx';

import AlertTransfer from './transfers/AlertTransfer.jsx';
import { base } from 'utilities';

var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;
var RouteHandler = ReactRouter.RouteHandler;

React.initializeTouchEvents(true);

var App = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        AlertTransfer.on('show', (alert) => {
            this.setState({
                Alert: base.extend(alert, {show: true})
            });
        });
        AlertTransfer.on('hide', () => {
            this.setState({
                Alert: {show: false}
            });
        });
        AlertTransfer.on('toast', (alert) => {
            this.setState({
                Alert: base.extend(alert, {
                    show: true,
                    hideTitle: true,
                    hideButton: true
                })
            });
            setTimeout(() => {
                AlertTransfer.trigger('hide');
            }, 1000);
        });
    },
    render: function() {
        return (
            <div className="app">
                <RouteHandler/>
                <Alert {...this.state.Alert}></Alert>
            </div>
        );
    }
});

var routes = (
    <Route handler={App} path="/">
        <Route handler={Appointment1} path="appointment-1" />
        <Route handler={Appointment2} path="appointment-2" />
        <Route path="choose-suit">
            <Route handler={ChooseSuit} path="index"></Route>
            <Route handler={SelectOil} path="select-oil"></Route>
            <Route handler={SelectFilter} path="select-filter"></Route>
            <Route handler={SelectAirFilter} path="select-air-filter"></Route>
            <Route handler={SelectAirConditionFilter} path="select-air-condition-filter"></Route>
            <DefaultRoute handler={ChooseSuit} />
        </Route>
        <Route handler={ChooseSuit} path="choose-suit" />
        <Route handler={Appointment3} path="appointment-3" />
        <Route handler={AppointmentSuccess} path="appointment-success" />
        <Route handler={SelectAddress} path="select-address" />
        <Route handler={EditAddress} path="edit-address" />
        <Route handler={AppointmentTime} path="appointment-time" />
        <Route handler={AppointmentAddress} path="appointment-address" />
        <Route handler={LoginVerifyCode} path="login-verify-code" />
        <Route handler={Login} path="login" />
        <Route handler={AppointmentEmergency1} path="appointment-emergency-1" />
        <Route handler={AppointmentEmergency2} path="appointment-emergency-2" />
        <Route handler={AppointmentEmergencySuccess} path="appointment-emergency-success" />
        <Route handler={Flow} path="flow" />
        <Route handler={CheckDetail} path="check-detail" />
        <Route path="user-center">
            <Route handler={UserCenterIndex} path="index" />
            <Route handler={AppointmentHistory} path="appointment-history" />
            <Route handler={AppointmentEmergencyHistory} path="appointment-emergency-history" />
            <Route handler={MyCar} path="my-car" />
            <Route handler={MyAddress} path="my-address" />
            <Route handler={MyInfo} path="my-info" />
            <Route path="account-set">
                <Route handler={AccountSetIndex} path="index"></Route>
                <Route handler={SelfInfo} path="self-info"></Route>
                <Route handler={ModifyPhone} path="modify-phone"></Route>
                <DefaultRoute handler={AccountSetIndex} />
            </Route>
            <Route path="add-car">
                <Route handler={AddCarIndex} path="index"></Route>
                <Route handler={SelectBrand} path="select-brand"></Route>
                <Route handler={SelectSeries} path="select-series"></Route>
                <Route handler={SelectModel} path="select-model"></Route>
                <DefaultRoute handler={AddCarIndex} />
            </Route>
            <DefaultRoute handler={UserCenterIndex} />
        </Route>
        <DefaultRoute handler={Flow} />
    </Route>
);

ReactRouter.run(routes, function(Handler) {
    React.render(<Handler/>, document.body);
});
