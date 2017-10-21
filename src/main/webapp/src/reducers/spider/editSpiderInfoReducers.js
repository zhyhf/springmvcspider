/**
 * Created by Administrator on 2017/9/15.
 */
import * as types from '../../constants/actionTypes'

const formDetail = (state='formDetail', action) => {
    switch (action.type) {
        case types.SAVE_TEMPLATE:
            return action.formDetail;
        default:
            return state
    }
};

const formVisiable = (state=false, action) => {
    switch (action.type) {
        case types.FORM_VISIABLE:
            return !state;
        default:
            return state
    }
};


module.exports.reducers={
    formDetail:formDetail,
    formVisiable:formVisiable
};