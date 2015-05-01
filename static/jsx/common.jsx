import Hammer from 'hammerjs';

function createFormData(data) {
    var fd = new FormData();
    for (var k in data) {
        fd.append(k, data[k]);
    }
    return fd;
}

function bindTap(element, callback) {
    var hm = new Hammer(element);
    hm.on('tap', callback);
}

export { createFormData, bindTap };