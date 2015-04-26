export default {
    createFormData: function(data) {
        var fd = new FormData();
        for (var k in data) {
            fd.append(d, data[k]);
        }
        return fd;
    }
};