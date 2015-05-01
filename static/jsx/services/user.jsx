import fetch from 'whatwg-fetch';
import { createFormData } from '../common.jsx';
import { Promise } from 'es6-promise';

var token;
function login(phone, code) {
    return window.fetch('/account/sign/in/', {
        method: 'post',
        body: createFormData({phone: phone, code: code})
    })
        .then((result) => {
            return result.text().then((text) => {
                if (result.status === 200) {
                    token = text;
                    return text;
                }
                throw new Error(text ? text : '未知错误');
            });
        }, (error) => {
            this.failed(error);
        });
}

function isLogin() {
    return new Promise(function(resolve, reject) {
        if (!token) {
            reject();
        } else {
            resolve();
        }
    });
}

export { login, isLogin };