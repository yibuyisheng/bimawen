import Reflux from 'reflux';
import actions from '../actions.jsx';

var userStore = Reflux.createStore({
    listenables: actions.user,
    onLogin: function (mobile, password) {
        if (this._isLoging) {
            return this.trigger({});
        }
        if (!mobile) {
            return this.trigger('请输入手机号码');
        }

        if (!password) {
            return this.trigger('请输入密码');
        }


        var _this = this;
        _this._isLoging = true;
        setTimeout(function () {
            _this._isLoging = false;
            _this.trigger({
                token: 'token'
            });
        }, 1000);
    },
    onIsLogin: function () {
        this.trigger(true);
    }
});

export default userStore;