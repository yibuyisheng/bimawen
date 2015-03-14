(function(global) {

    global.pages = global.pages || {};

    var com = global.components;

    global.pages.StoreMaintain = React.createClass({
        render: function() {
            return (
                <div className="store-maintain-page">
                    <div className="top">
                        <p>4S店品质，约60%价格</p>
                        <p>纯正配件假一罚十；30天/3000公里质保</p>
                    </div>
                    <div className="content">
                        <div className="container add-car">
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
                        <div className="container more">
                            更多项目
                            <i className="arrow-right" />
                        </div>
                    </div>

                    <div className="bottom">
                        我的车该做啥
                    </div>
                </div>
            );
        }
    });

})(window);