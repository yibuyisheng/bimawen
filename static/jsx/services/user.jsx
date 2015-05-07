import fetch from 'whatwg-fetch';
import { createFormData, encodeParams } from '../common.jsx';
import { Promise } from 'es6-promise';

function login(phone, code) {
    return window.fetch('/account/sign/in/', {
        method: 'post',
        body: createFormData({phone: phone, code: code})
    })
        .then((result) => {
            return result.text().then((text) => {
                if (result.status === 200) {
                    localStorage.setItem('token', text);
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
        var token = localStorage.getItem('token');
        if (!token) {
            reject();
        } else {
            resolve();
        }
    });
}

function getMyAddresses() {
    return window.fetch('/account/my/address/list/?token=' + localStorage.getItem('token'))
        .then((result) => result.json())
        .then((json) => {
            if (json.status != 200) {
                throw new Error(json.message);
            }
            return json.address_list;
        });
}

function getDefaultAddress() {
    return window.fetch('/account/my/address/default/?token=' + localStorage.getItem('token'))
        .then((result) => result.json())
        .then((json) => {
            if (json && json.length) {
                return json[0];
            }
            return null;
        });
}

function saveAddress(city, district, detailAddress, contact, contactPhone, code, isDefault) {
    return window.fetch('http://121.40.167.199/account/my/address/', {
        method: 'post',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: encodeParams({
            token: localStorage.getItem('token'),
            city: city,
            district: district,
            detail_address: detailAddress,
            contact: contact,
            contact_phone: contactPhone,
            code: code,
            is_default: isDefault
        })
    }).then((result) => {
        if (result.status !== 200) {
            return result.text().then((text) => {throw new Error(text)});
        }
        return result.text();
    });
}

export { login, isLogin, getMyAddresses, getDefaultAddress, saveAddress };