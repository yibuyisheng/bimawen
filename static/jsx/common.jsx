import Hammer from 'hammerjs';
import { urlHelper } from 'utilities';
import { Promise } from 'es6-promise';

function createFormData(data) {
    var fd = new FormData();
    for (var k in data) {
        fd.append(k, data[k]);
    }
    return fd;
}

function encodeParams(params) {
    return urlHelper.buildUrl('', params).replace(/^\?/, '');
}

function bindTap(element, callback) {
    var hm = new Hammer(element);
    hm.on('tap', callback);
}

function post(url, params) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            resolve({
                status: xhr.status,
                response: xhr.response
            });
        };
        xhr.onerror = function() {
            reject({
                status: xhr.status,
                response: xhr.response
            });
        };
        xhr.send(encodeParams(params));
    });
}

export { createFormData, bindTap, encodeParams, post };