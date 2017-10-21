/**
 * Created by Administrator on 2017/9/23.
 */
import * as types from '../../constants/actionTypes'
import messageActions from '../common/messageActions'
const showInfo=messageActions.actions.showInfo;

let nextTodoId = 100;

function generalTableDatas(){
    let data = [];
    nextTodoId++;
    for(var i = 0; i < 6; i++){
        var tmp = {};
        tmp.key=(i);
        tmp.key=(i)+"name";
        tmp.name = (i)+"";
        tmp.depart = (i)+"";
        tmp.birthday = '2016-11-02 00:00:05';
        data.push(tmp);
    }
    return data;
}

const getTableDatas = () => (
{
    type: types.TABLE_DATAS,
    tableDatas:generalTableDatas()
});

const receivePosts = (values) => (
    {
        type: types.RECEIVE_POSTS,
        newItem:{
             key:nextTodoId++,
            name:values.name,
            depart:values.depart,
            birthday :values.birthday
         }
    }
)
////sucdess
//const fetchPosts = (values) => dispatch => {
//    dispatch(showInfo(true,"添加记录成功"));
//    dispatch(receivePosts(values));
//}

//error
const postError = (values) => dispatch => {
    dispatch(showInfo('error','添加记录失败',"添加记录失败"));
}

const fetchPosts = (values) => dispatch => {
    return fetch("/webbf/users",{type:"get"})
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json)))
    .catch(err=>dispatch(postError(err)))
}

const showModel = (visible) => ({
    type: types.SHOW_MODEL,
    modelVisible:visible
});

module.exports.actions={
    getTableDatas:getTableDatas,
    fetchPosts:fetchPosts,
    showModel:showModel
};
