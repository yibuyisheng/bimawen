var ReactRouter = require('react-router');
var React = require('react');
var Appointment1 = require('./pages/Appointment1.jsx');
var Appointment2 = require('./pages/Appointment2.jsx');
var Appointment3 = require('./pages/Appointment3.jsx');
var AppointmentTime = require('./pages/AppointmentTime.jsx');
var AppointmentAddress = require('./pages/AppointmentAddress.jsx');
var LoginVerifyCode = require('./pages/LoginVerifyCode.jsx');
var Login = require('./pages/Login.jsx');
var AppointmentSuccess = require('./pages/AppointmentSuccess.jsx');
var AppointmentEmergency1 = require('./pages/AppointmentEmergency1.jsx');
var AppointmentEmergency2 = require('./pages/AppointmentEmergency2.jsx');
var AppointmentEmergencySuccess = require('./pages/AppointmentEmergencySuccess.jsx');
var UserCenterIndex = require('./pages/UserCenter/Index.jsx');
var AppointmentHistory = require('./pages/UserCenter/AppointmentHistory.jsx');
var AppointmentEmergencyHistory = require('./pages/UserCenter/AppointmentEmergencyHistory.jsx');
var MyCar = require('./pages/UserCenter/MyCar.jsx');
var MyAddress = require('./pages/UserCenter/MyAddress.jsx');
var MyInfo = require('./pages/UserCenter/MyInfo.jsx');
var AccountSet = require('./pages/UserCenter/AccountSet.jsx');

var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;
var RouteHandler = ReactRouter.RouteHandler;

React.initializeTouchEvents(true);

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
    <Route handler={App} path="/">
        <Route handler={Appointment1} path="appointment-1" />
        <Route handler={Appointment2} path="appointment-2" />
        <Route handler={Appointment3} path="appointment-3" />
        <Route handler={AppointmentSuccess} path="appointment-success" />
        <Route handler={AppointmentTime} path="appointment-time" />
        <Route handler={AppointmentAddress} path="appointment-address" />
        <Route handler={LoginVerifyCode} path="login-verify-code" />
        <Route handler={Login} path="login" />
        <Route handler={AppointmentEmergency1} path="appointment-emergency-1" />
        <Route handler={AppointmentEmergency2} path="appointment-emergency-2" />
        <Route handler={AppointmentEmergencySuccess} path="appointment-emergency-success" />
        <Route path="user-center">
            <Route handler={UserCenterIndex} path="index" />
            <Route handler={AppointmentHistory} path="appointment-history" />
            <Route handler={AppointmentEmergencyHistory} path="appointment-emergency-history" />
            <Route handler={MyCar} path="my-car" />
            <Route handler={MyAddress} path="my-address" />
            <Route handler={MyInfo} path="my-info" />
            <Route handler={AccountSet} path="account-set" />
        </Route>
        <DefaultRoute handler={Appointment1} />
    </Route>
);

ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
