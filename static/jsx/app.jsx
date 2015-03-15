(function(global) {

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
            <Route handler={pages.Main} path="main">
                <Route path="home" handler={pages.Home}></Route>
                <Route path="store-maintain" handler={pages.StoreMaintain}></Route>
                <Route path="me" handler={pages.Me}></Route>
            </Route>
        </Route>
    );

    ReactRouter.run(routes, function (Handler) {
        React.render(<Handler/>, document.body);
    });
})(window);
