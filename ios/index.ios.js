'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    WebView,
} = React;

var ios = React.createClass({
    componentDidMount: function () {
        this.refs.webView.scrollEnabled = false;
    },
    render: function() {
        return (
            <WebView ref="webView" url={"http://10.57.123.114:8000/static/dist/main.html"}
                style={styles.container}/>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('ios', () => ios);
