(function(global) {

    global.components = global.components || {};

    var com = global.components;

    global.components.Footer = React.createClass({
        render: function() {
            var leftButton = this.props.leftButton || {};
            var centerButton = this.props.centerButton || {};
            var rightButton = this.props.rightButton || {};
            return (
                <footer className="footer-component">
                    <com.Button onTap={leftButton.onTap}>
                        首页
                    </com.Button>
                    <com.Button onTap={centerButton.onTap}>
                        门店保养
                    </com.Button>
                    <com.Button onTap={rightButton.onTap}>
                        我
                    </com.Button>
                </footer>
            );
        }
    });

})(window);