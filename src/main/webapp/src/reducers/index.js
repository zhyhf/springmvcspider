import { combineReducers } from 'redux'

//import columns from './tableColumns'
//import tableDatas from './tableDatas'
//import visible from './models'
//import posts from './postsByReddit'

import messageReducers from './common/messageReducers'
import listReducers from './spider/listReducers'
import editSpiderInfoReducers from './spider/editSpiderInfoReducers'
import tableReducers from './tables/tableReducers'

const todoApp = combineReducers({
    visible:messageReducers.reducers.visible,
    msg:messageReducers.reducers.msg,
    notifyTitle:messageReducers.reducers.notifyTitle,
    notifyIcon:messageReducers.reducers.notifyIcon,

    //tables
    columns:tableReducers.reducers.columns,
    tableDatas:tableReducers.reducers.tableDatas,
    modelVisible:tableReducers.reducers.modelVisible,

    //editSpiderInfo
    formDetail:editSpiderInfoReducers.reducers.formDetail,
    formVisiable:editSpiderInfoReducers.reducers.formVisiable,

    //all list
    listColumns:listReducers.reducers.listColumns,
    listDatas:listReducers.reducers.listDatas,
    recordDetail:listReducers.reducers.recordDetail,
})

export default todoApp
