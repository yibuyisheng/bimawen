(function(global) {

    global.components = global.components || {};

    var com = global.components;

    global.components.Header = React.createClass({
        render: function() {
            var leftButton = this.props.leftButton || {};
            var rightButton = this.props.rightButton || {};
            return (
                <header className="header-component">
                    <com.Button onTap={leftButton.onTap}>{leftButton.text}</com.Button>
                    <h1>{this.props.children}</h1>
                    <com.Button onTap={rightButton.onTap}>{rightButton.text}</com.Button>
                </header>
            );
        }
    });

})(window);