import { eventDealer, base } from 'utilities';

var AlertTransfer = base.extend({}, eventDealer, {
    show: function(content, title) {
        this.trigger('show', {
            show: true,
            title: title,
            content: content,
            onOk: function() {
                AlertTransfer.trigger('hide');
            }
        });
    },
    error: function(content) {
        this.show(content, '错误');
    },
    toast: function(content) {
        this.trigger('toast', {
            content: content
        });
    }
});

export default AlertTransfer;