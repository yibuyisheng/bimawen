import Reflux from 'reflux';
import fetch from 'whatwg-fetch';
import common from './common.jsx';

var host = 'http://121.40.167.199/';
var apis = {
    signIn: 'account/sign/in/'
};

var userActions = Reflux.createActions({
    login: { children: ['success', 'failed'] }
});

userActions.login.listen(function(data) {
    fetch(host + apis.signIn, common.createFormData(data))
        .then((result) => {
            this.success(result);
        }, (error) => {
            this.failed(result);
        });
});

export default {
    user: userActions
};