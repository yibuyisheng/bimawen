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
    }
});

export default AlertTransfer;