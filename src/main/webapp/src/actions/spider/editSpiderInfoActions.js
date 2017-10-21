/**
 * Created by Administrator on 2017/9/15.
 */
import * as types from '../../constants/actionTypes'
import messageActions from '../common/messageActions'

const showInfo=messageActions.actions.showInfo;
let nextTodoId = 100;
// const updateFormDetail = (value) => (
//     {
//         type: types.SAVE_TEMPLATE,
//         formDetail:value
//     }
// )

const receivePosts = (value) => dispatch => {
    if(value.errorMsg==null){
        dispatch(showInfo('success',"添加成功","添加成功，模板ID为:"+value.result));
        //dispatch(updateFormDetail(value.result));
    }
    else{
        dispatch(showInfo('error',"添加失败","添加失败，错误信息:"+value.errorMsg));
    }

}


//error
const postError = (err) => dispatch => {
    dispatch(showInfo('error','Error',err.toString()));
}
const saveTemplate = (fieldsValue) =>(dispatch)  => {
    var param = { method: 'POST',
        body:JSON.stringify(fieldsValue),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };
    return fetch('/springmvcspider/template/save/', param)
    .then(function (response,fieldsValue) {
        console.debug(fieldsValue);
        return response.json();
    }).then(function (json) {
        return dispatch(receivePosts(json));
    }).catch(function (err) {
        return dispatch(postError(err));
    });

    // return fetch('/springmvcspider/template/',myInit)
    //     .then(response => response.json())
    //     .then(json => dispatch(receivePosts(json)))
    //     .catch(err=>dispatch(postError(err)))
}

 const saveFormData = (fieldsValue) => dispatch => {
    dispatch(saveTemplate(fieldsValue));
};
const showAllSeting=()=>(
    {
        type: types.FORM_VISIABLE,
    }
);

module.exports.actions={
    saveFormData:saveFormData,
    showAllSeting:showAllSeting,
};





// const saveTemplate = (fieldsValue) => (
//     {
//         type: types.SAVE_TEMPLATE,
//         formDetail:'siteName:' +fieldsValue.siteName+'domain:' + fieldsValue.domain+"startUrl:"+fieldsValue.startUrl+"agreement:"+fieldsValue.agreement
//     });

//'${pageContext.request.contextPath}/commons/spider/testSpiderInfo'
// const saveTemplate = (fieldsValue) => dispatch => {
//    return fetch('spider/commons/spider/testSpiderInfo',{type:"get"})
//        .then(response => response.json())
//        .then(json => dispatch(receivePosts(reddit, json)))
//    .catch(err=>dispatch(postError(err)))
// }





// const saveTemplate = (fieldsValue) =>(fieldsValue,dispatch)  => {
//     var myInit = { method: 'get',
//         body: fieldsValue,
//         cache: 'default' };
//     return fetch('/webbf/users/',myInit)
//         .then(response => response.json())
//         .then(json => dispatch(receivePosts(json)))
//         .catch(err=>dispatch(postError(err)))
// }

// const saveTemplate = (fieldsValue) =>(fieldsValue,dispatch)  => {
//     console.log(fieldsValue);
//     var myInit = { method: 'POST',
//         body: JSON.stringify({'field':"aaaa"}),
//         headers: {
//             "Content-Type": "application/json"
//         },
//         cache: 'default' };
//     return fetch('/webbf/template/',myInit)
//         .then(response => response.json())
//         .then(json => dispatch(receivePosts(json)))
//         .catch(err=>dispatch(postError(err)))
// }

// function createGist(opts) {
//     fetch('/springmvcspider/template/', {
//         method: 'post',
//         body: JSON.stringify(opts)
//     }).then(function(response) {
//         return response.json();
//     }).then(function(data) {
//
//     });
// }


