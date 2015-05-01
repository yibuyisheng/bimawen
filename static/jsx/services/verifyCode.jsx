import fetch from 'whatwg-fetch';
import { createFormData } from '../common.jsx';

function send(phone) {
    return window.fetch('/account/send/validate_code/', {
        method: 'post',
        body: createFormData({phone: phone})
    })
        .then((result) => {
            return result.text().then((text) => {
                if (result.status === 200) {
                    return text;
                }
                throw new Error(text ? text : '未知错误');
            });
        }, (error) => {
            this.failed(error);
        });
}

export { send };