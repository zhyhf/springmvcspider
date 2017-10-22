/**
 * Created by Administrator on 2017/9/15.
 */
import * as types from '../../constants/actionTypes'
import messageActions from '../common/messageActions'
const showInfo=messageActions.actions.showInfo;

let nextTodoId=0;
function generalListDatas(){
    let data = [];
    nextTodoId++;
    for(var i = 0; i < 12; i++){
        var tmp = {};
        tmp.key=(i+nextTodoId);
        tmp.title=(i+nextTodoId)+"title";
        tmp.domain = (i+nextTodoId)+"domain";
        tmp.time = '2016-11-02 00:00:05';
        tmp.show = 'show';
        tmp.go = 'go';
        tmp.delete = 'delete';
        data.push(tmp);
    }
    return data;
}

const getListDatas = () => (
{
    type: types.LIST_TABLE_DATAS,
    listDatas:generalListDatas()
});
function spiderInfoListTranslater(spiderInfoList){
    let data = [];
    nextTodoId++;
    for(var i = 0; i <spiderInfoList.length; i++){
        var tmp = {};
        tmp.key=spiderInfoList[i].id;
        tmp.siteName=spiderInfoList[i].siteName;
        tmp.domain = spiderInfoList[i].domain;
       // tmp.time = '2016-11-02 00:00:05';
        tmp.show = 'show';
        tmp.go = 'go';
        tmp.delete = 'delete';
        tmp.originData=spiderInfoList[i];
        data.push(tmp);
    }
    return data;
}
const translateSpiderInfoListToTableList = (spiderInfoList) => (
    {
        type: types.LIST_TABLE_DATAS,
        listDatas:spiderInfoListTranslater(spiderInfoList)
    });

const receivePosts = (spiderInfoList) => dispatch => {
    dispatch(showInfo('success',"获取成功","列表长度:"+spiderInfoList.length));
    dispatch(translateSpiderInfoListToTableList(spiderInfoList));
}

//error
const postError = (err) => dispatch => {
    dispatch(showInfo('error','Error',err.toString()));
}

const getAllTemplates = (size,page) =>(dispatch)  => {
    var url ="/springmvcspider/template/listAll?"+"size="+size+"&page="+page;
    var param = { method: 'get',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };
    return fetch(url, param)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            return dispatch(receivePosts(json));
        }).catch(function (err) {
            return dispatch(postError(err));
        });
}

const deleteReceive = (returnValue) => dispatch => {
    if(returnValue.result){
        dispatch(showInfo('success',"删除成功",""));
        dispatch(getAllTemplates(15,1));
    }
    else {
        dispatch(showInfo('error',"删除失败",returnValue.errorMsg));
    }

}

const deleteTemplateById= (id) =>(dispatch)  => {
    var url ="/springmvcspider/template/deleteById?"+"id="+id;
    var param = { method: 'get',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };
    return fetch(url, param)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            return dispatch(deleteReceive(json));
        }).catch(function (err) {
            return dispatch(postError(err));
        });
}




//show record by record
const showRecordDetail = (record) => (
    {
        type: types.LIST_SHOW_RECORD,
        recordId:record.key,
        recordDetail:'ID:' +record.key+'标题:' + record.title+"网站:"+record.domain+"时间:"+record.time
    });

 const showRecord = (record) => dispatch => {
    dispatch(showRecordDetail(record));
    dispatch(showInfo('success',"get records success","get records detail"));
};

const receiveStartPosts = (startResult) => dispatch => {
     if(startResult.success){
        dispatch(showInfo('success',"启动成功","任务ID为:"+startResult.result));
    }
    else{
        dispatch(showInfo('error',"启动失败","添加失败，错误信息:"+startResult.errorMsg));
    }
}

const startTemplate = (fieldsValue) =>(dispatch)  => {
    var param = { method: 'POST',
        body:JSON.stringify(fieldsValue),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };
    return fetch('/commons/spider/start/', param)
    .then(function (response,fieldsValue) {
        return response.json();
    }).then(function (json) {
        return dispatch(receiveStartPosts(json));
    }).catch(function (err) {
        return dispatch(postError(err));
    });

}

module.exports.actions={
    getListDatas:getListDatas,
    getAllTemplates:getAllTemplates,
    showRecord:showRecord,
    deleteTemplateById:deleteTemplateById,
    startTemplate:startTemplate,
};

// const getAllTemplates = (size,page) =>(dispatch)  => {
//
//    // var url ="/springmvcspider/template/listAll?"+"size="+size+"&page="+page;
//    // var url ="/springmvcspider/template/listAll?size=3&page=1";
//     //var url ="/springmvcspider/template/listAll";
//     var param = { method: 'post',
//         body:JSON.stringify({"size":size,"page":page}),
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         }
//     };
//     return fetch("/springmvcspider/template/listAll", param)
//         .then(function (response) {
//             return response.json();
//         }).then(function (json) {
//             return dispatch(receivePosts(json));
//         }).catch(function (err) {
//             return dispatch(postError(err));
//         });
// }