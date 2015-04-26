import Reflux from 'reflux';
import actions from '../actions.jsx';

var userStore = Reflux.createStore({
    listenables: actions.user,
    onLoginSuccess: function() {

    },
    onLoginFailed: function() {

    }
});

export default userStore;