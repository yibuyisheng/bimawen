import Reflux from 'reflux';
import fetch from 'whatwg-fetch';
import { createFormData } from '../common.jsx';

let verifyCodeActions = Reflux.createActions({
    send: { children: ['success', 'failed'] }
});

verifyCodeActions.send.listen(function(data) {
    window.fetch('/account/send/validate_code/', {
        method: 'post',
        body: createFormData(data)
    })
        .then((result) => {
            result.text().then((text) => {
                if (result.status === 200) {
                    this.success(text);
                } else {
                    this.failed(new Error(text ? text : '未知错误'));
                }
            });
        }, (error) => {
            this.failed(error);
        });
});

export default verifyCodeActions;