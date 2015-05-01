import Reflux from 'reflux';
import { verifyCodeActions } from '../actions/index.jsx';

var verifyCodeStore = Reflux.createStore({
    listenables: verifyCodeActions,
    // onSendSuccess: function(data) {
    //     this.trigger({status: 1, data: data});
    // },
    // onSendFailed: function(error) {
    //     this.trigger({status: 0, message: error.message ? error.message : '未知错误'});
    // }
});

export default verifyCodeStore;