/**
 * Created by Administrator on 2017/9/23.
 */
import * as types from '../../constants/actionTypes'

const showInfo=(notifyIcon,notifyTitle,message)=>({
    type: types.SHOW_INFO,
    visible:true,
    notifyTitle:notifyTitle,
    notifyIcon:notifyIcon,
    msg:message
});

const hideInfo=()=>({
    type: types.HIDE_INFO,
    visible:false
});

module.exports.actions={
    showInfo:showInfo,
    hideInfo:hideInfo
};