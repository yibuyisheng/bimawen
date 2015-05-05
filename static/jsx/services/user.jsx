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
            if (json.status != 200) {
                throw new Error(json.message);
            }
            return json.address;
        });
}

function saveAddress(city, district, detailAddress, contact, contactPhone) {
    return window.fetch('/account/my/address/', {
        method: 'post',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: encodeParams({
            token: localStorage.getItem('token'),
            city: city,
            district: district,
            detail_address: detailAddress,
            contact: contact,
            contact_phone: contactPhone
        })
    }).then((result) => {
        result.json();
    });
}

export { login, isLogin, getMyAddresses, getDefaultAddress, saveAddress };