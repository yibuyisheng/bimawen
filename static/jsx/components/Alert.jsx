import React from 'react';
import Tap from './Tap.jsx';

var Alert = React.createClass({
    onOk: function() {
        this.props.onOk();
    },
    render: function() {
        var style = {};
        if (!this.props.show) {
            style.display = 'none';
        }
        return (
            <div className="alert-box" style={style}>
                <div className="cover"></div>
                <div className="content">
                    <h3 style={{display: this.props.hideTitle ? 'none' : ''}}>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                    <div className="opt" style={{display: this.props.hideButton ? 'none' : ''}}>
                        <Tap onTap={this.onOk}>
                            <button>确定</button>
                        </Tap>
                    </div>
                </div>
            </div>
        );
    }
});

export default Alert;

