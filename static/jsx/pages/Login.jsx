(function(global) {

    global.pages = global.pages || {};

    var com = global.components;

    global.pages.Login = React.createClass({
        mixins: [ReactRouter.Navigation],
        render: function() {
            var _this = this;
            var leftButton = {
                text: '返回',
                onTap: function() {
                    _this.goBack();
                }
            };
            return (
                <div className="login-page">
                    <com.Header leftButton={leftButton}>
                        登录
                    </com.Header>
                    <div className="content">
                        登录
                    </div>
                    <com.Footer/>
                </div>
            );
        }
    });

})(window);