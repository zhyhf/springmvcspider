/**
 * Created by Administrator on 2017/9/23.
 */
/**
 * Created by Administrator on 2017/9/2.
 */
import React from 'react'
import * as types from '../../constants/actionTypes'

let defaultColumns= [{
    title: 'name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'depart',
    dataIndex: 'depart',
    key: 'depart',
}, {
    title: 'birthday',
    dataIndex: 'birthday',
    key: 'birthday',
},  {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
<span>
<a href="javascript:void(0)" onClick={function(record){
    alert('用户id为' + record.key)
}.bind(this, record)}>修改</a>
</span>
),
}];


const columns = (state = defaultColumns, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const tableDatas = (state =[], action) => {
    switch (action.type) {
        case types.TABLE_DATAS:
            return action.tableDatas;
        case types.RECEIVE_POSTS:
            return [...state,action.newItem];
        default:
            return state
    }
}

const modelVisible = (state=false, action) => {
    switch (action.type) {
        case types.SHOW_MODEL:
            return action.modelVisible;
        default:
            return state
    }
};

module.exports.reducers={
    tableDatas:tableDatas,
    columns:columns,
    modelVisible:modelVisible
};