/**
 * Created by Administrator on 2017/9/15.
 */

import * as types from '../../constants/actionTypes'

let defaultColumns= [{
    title: '网站',
    dataIndex: 'siteName',
    key: 'siteName',
}, {
    title: '域名',
    dataIndex: 'domain',
    key: 'domain',
}
];

const listColumns = (state = defaultColumns, action) => {
    switch (action.type) {
        default:
            return state
    }
};

const listDatas = (state =[], action) => {
    switch (action.type) {
        case types.LIST_TABLE_DATAS:
            return action.listDatas;
        default:
            return state
    }
};

const recordId = (state=-1, action) => {
    switch (action.type) {
        case types.LIST_SHOW_RECORD:
            return action.recordId;
        default:
            return state
    }
};

const recordDetail = (state='', action) => {
    switch (action.type) {
        case types.LIST_SHOW_RECORD:
            return action.recordDetail;
        default:
            return state
    }
};

module.exports.reducers={
    listColumns:listColumns,
    listDatas:listDatas,
    //visible:visible,
    //msg:msg,
    recordId:recordId,
    recordDetail:recordDetail
};