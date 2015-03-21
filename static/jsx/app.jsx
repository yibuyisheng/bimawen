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
        <DefaultRoute handler={Appointment1} />
    </Route>
);

ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
