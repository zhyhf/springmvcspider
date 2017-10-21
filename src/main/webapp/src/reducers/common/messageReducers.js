/**
 * Created by Administrator on 2017/9/23.
 */
import * as types from '../../constants/actionTypes'

const visible = (state=false, action) => {
    switch (action.type) {
        case types.SHOW_INFO:
        case types.HIDE_INFO:
            return action.visible;
        default:
            return state
    }
};
const notifyTitle = (state='NotifyTitle', action) => {
    switch (action.type) {
        case types.SHOW_INFO:
            return action.notifyTitle;
        default:
            return state
    }
};
const notifyIcon = (state='success', action) => {
    switch (action.type) {
        case types.SHOW_INFO:
            return action.notifyIcon;
        default:
            return state
    }
};

const msg = (state='', action) => {
    switch (action.type) {
        case types.SHOW_INFO:
            return action.msg;
        default:
            return state
    }
};

module.exports.reducers={
    visible:visible,
    msg:msg,
    notifyTitle:notifyTitle,
    notifyIcon:notifyIcon
};