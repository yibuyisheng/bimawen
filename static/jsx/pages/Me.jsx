var React = require('react');

var Me = React.createClass({
    render: function() {
        return (
            <div className="me-page">
                <div className="top">
                    你还没有登录哦~<br />
                    <button>马上登录</button>
                </div>
                <div className="container">
                    上门保养订单
                    <i className="arrow-right" />
                </div>
                <div className="container">
                    <p>
                        免费洗车券
                        0张
                        <i className="arrow-right" />
                    </p>
                    <p>
                        特惠洗车券
                        0张
                        <i className="arrow-right" />
                    </p>
                </div>
                <div className="container">
                    <h3>
                        保养订单
                        <i className="arrow-right" />
                    </h3>
                    <p>
                        <a>待报价</a>
                        <a>待确认</a>
                        <a>待消费</a>
                        <a>待评论</a>
                    </p>
                </div>
                <div className="container">
                    我的爱车
                    <i className="arrow-right" />
                </div>
                <div className="container">
                    <p>
                        洗车代金券
                        ￥0.00
                    </p>
                    <p>
                        保养代金券
                        <i className="arrow-right" />
                    </p>
                </div>
            </div>
        );
    }
});

module.exports = Me;