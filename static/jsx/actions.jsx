import Reflux from 'reflux';

var userActions = Reflux.createActions({
        login: { sync: false },
        isLogin: { sync: true }
    });

export default {
    user: userActions
};