var React = require('react');
var ReactRouter = require('react-router');
var Header = require('../components/Header.jsx');
var Footer = require('../components/Footer.jsx');

var Main = React.createClass({
    mixins: [ReactRouter.Navigation],
    render: function() {
        var _this = this;

        var leftButton = {
            text: '上海',
            onTap: function() {

            }
        };
        var rightButton = {
            text: '登录',
            onTap: function() {
                _this.transitionTo('/login');
            }
        };

        var bottomLeftButton = {
            onTap: function() {
                _this.replaceWith('/main/home');
            }
        };
        var bottomCenterButton = {
            onTap: function() {
                _this.replaceWith('/main/store-maintain');
            }
        };
        var bottomRightButton = {
            onTap: function() {
                _this.replaceWith('/main/me');
            }
        };

        return (
            <div className="main-page">
                <Header leftButton={leftButton} rightButton={rightButton}>
                    洗车
                </Header>
                <ReactRouter.RouteHandler />
                <Footer leftButton={bottomLeftButton}
                    centerButton={bottomCenterButton}
                    rightButton={bottomRightButton} />
            </div>
        );
    }
});

module.exports = Main;