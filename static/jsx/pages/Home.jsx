var React = require('react');

var Home = React.createClass({
    render: function() {
        var leftButton = {text: '上海'};
        var rightButton = {text: '登录'};
        return (
            <div className="home-page">
                <div className="top">
                    <p><img /><br />10℃~15℃</p>
                    <p>
                        <span>不宜洗车</span><br />
                        <span>小雨转中雨 东北风微风</span><br />
                        <span>2015年03月14日 更新</span>
                    </p>
                </div>
                <div className="add-car container">
                    添加我的爱车
                    <i className="arrow-right" />
                </div>
                <div className="container service">
                    <p>
                        <img /><br />
                        <strong>领免费洗车券</strong><br />
                        <span>每15天可领取一次</span>
                    </p>
                    <p>
                        <img /><br />
                        <strong>附近洗车9元</strong><strong>起</strong><br />
                        <span>比买卡更划算</span>
                    </p>
                </div>
                <div className="container">
                    <div>
                        <img />
                        <p>
                            <strong>豪华车专业上门保养</strong><br />
                            <span>奔驰、宝马、奥迪...</span>
                        </p>
                    </div>
                    <div>
                        <img />
                        <p>
                            <strong>上门快速保养</strong><br />
                            <span>大众、别克、雪佛兰...</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;