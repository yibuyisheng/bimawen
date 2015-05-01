import Reflux from 'reflux';
import fetch from 'whatwg-fetch';
import common from '../common.jsx';

var apis = {
    signIn: '/account/sign/in/'
};

var userActions = Reflux.createActions({
    login: { children: ['success', 'failed'] },
    isLogin: { children: ['notLogin', 'logined'] }
});

userActions.login.listen(function(data) {
    window.fetch(apis.signIn, common.createFormData(data))
        .then((result) => {
            if (result.status === 200) {
                this.success();
            } else {
                this.failed(new Error(result.statusText));
            }
        }, (error) => {
            this.failed(error);
        });
});

export default userActions;