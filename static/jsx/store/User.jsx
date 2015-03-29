import Reflux from 'reflux';
import actions from '../actions.jsx';

var userStore = Reflux.createStore({
    listenables: actions.user,
    onLogin: function () {
        var _this = this;
        setTimeout(function () {
            _this.trigger('onLogin');
        }, 1000);
    },
    onIsLogin: function () {
        this.trigger(false);
    }
});

export default userStore;