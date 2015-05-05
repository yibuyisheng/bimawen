import Hammer from 'hammerjs';
import { urlHelper } from 'utilities';

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

export { createFormData, bindTap, encodeParams };