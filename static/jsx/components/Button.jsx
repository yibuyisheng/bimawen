(function(global) {

    global.components = global.components || {};

    global.components.Button = React.createClass({
        render: function() {
            return (
                <button className="button" onTouchEnd={this.props.onTap}>
                    {this.props.children}
                </button>
            );
        }
    });

})(window);