var ReactRouter = require('react-router');
var React = require('react');
var Main = require('./pages/Main.jsx');
var Home = require('./pages/Home.jsx');
var Login = require('./pages/Login.jsx');
var Me = require('./pages/Me.jsx');
var StoreMaintain = require('./pages/StoreMaintain.jsx');

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
        <Route handler={Main} path="main">
            <Route path="home" handler={Home}></Route>
            <Route path="store-maintain" handler={StoreMaintain}></Route>
            <Route path="me" handler={Me}></Route>
            <DefaultRoute handler={Home} />
        </Route>
        <Route path="login" handler={Login} />
        <DefaultRoute handler={Main} />
    </Route>
);

ReactRouter.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
