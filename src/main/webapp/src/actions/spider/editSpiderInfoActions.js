/**
 * Created by Administrator on 2017/9/15.
 */
import * as types from '../../constants/actionTypes'
import messageActions from '../common/messageActions'

const showInfo=messageActions.actions.showInfo;
//let nextTodoId = 100;


const receivePosts = (value) => dispatch => {
    if(value.success){
        dispatch(showInfo('success',"添加成功","添加成功，模板ID为:"+value.result));
        window.location.hash = "listSpiderInfo";
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
        return response.json();
    }).then(function (json) {
        return dispatch(receivePosts(json));
    }).catch(function (err) {
        return dispatch(postError(err));
    });

}

 const saveFormData = (fieldsValue) => dispatch => {
    dispatch(saveTemplate(fieldsValue));
};
const showAllSeting=()=>(
    {
        type: types.FORM_VISIABLE,
    }
);

const editTemplate=(template) =>(
    {
        type: types.INIT_TEMPLATE,
        template:template
    }
);
const updateTemplate = (fieldsValue) =>(dispatch)  => {
    var param = { method: 'POST',
        body:JSON.stringify(fieldsValue),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    };
    return fetch('/springmvcspider/template/update/', param)
    .then(function (response,fieldsValue) {
        return response.json();
    }).then(function (json) {
        return dispatch(receivePosts(json));
    }).catch(function (err) {
        return dispatch(postError(err));
    });
};
module.exports.actions={
    saveFormData:saveFormData,
    showAllSeting:showAllSeting,
    editTemplate:editTemplate,
    updateTemplate:updateTemplate,
};


    // return fetch('/springmvcspider/template/',myInit)
    //     .then(response => response.json())
    //     .then(json => dispatch(receivePosts(json)))
    //     .catch(err=>dispatch(postError(err)))