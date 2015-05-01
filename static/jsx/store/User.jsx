import Reflux from 'reflux';
import { userActions } from '../actions/index.jsx';

var userStore = Reflux.createStore({
    listenables: userActions,
    onLoginSuccess: function(data) {
        this.trigger({status: 1, data: data});
    },
    onLoginFailed: function(error) {
        this.trigger({status: 0, message: error.message ? error.message : '未知错误'});
    }
});

export default userStore;