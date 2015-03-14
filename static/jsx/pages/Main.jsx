(function(global) {

    global.pages = global.pages || {};

    var com = global.components;

    global.pages.Main = React.createClass({
        mixins: [ReactRouter.Navigation],
        render: function() {
            var leftButton = {text: '上海'};
            var rightButton = {text: '登录'};

            var _this = this;
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
                    <com.Header leftButton={leftButton} rightButton={rightButton}>
                        洗车
                    </com.Header>
                    <ReactRouter.RouteHandler />
                    <com.Footer leftButton={bottomLeftButton}
                        centerButton={bottomCenterButton}
                        rightButton={bottomRightButton} />
                </div>
            );
        }
    });

})(window);