/**
 * Created by Administrator on 2017/9/17.
 */
import { connect } from 'react-redux'
import EditSpiderInfoComponent from '../../components/spider/EditSpiderInfoComponent'
import { saveFormData,updateTemplate,showInfo,hideInfo,showAllSeting} from '../../actions'
const mapStateToProps = (state) => ({
    msg:state.msg,
    visible:state.visible,
    notifyIcon:state.notifyIcon,
    notifyTitle:state.notifyTitle,
    formDetail:state.formDetail,
    formVisiable:state.formVisiable,
    template:state.template
});
const mapDispatchToProps = (dispatch) => ({
    saveFormData:(fieldsValue)=>{
        if(fieldsValue.id!=undefined &&  fieldsValue.id!=""){
            dispatch(updateTemplate(fieldsValue));
        }
        else {
            dispatch(saveFormData(fieldsValue))
        }
        
    },
    showAllSeting:()=>{
    dispatch(showAllSeting());
    },
    hideInfo:()=>{
        dispatch(hideInfo())
    },
});

const EditSpiderInfoContainer = connect(mapStateToProps,mapDispatchToProps)(EditSpiderInfoComponent);

export default EditSpiderInfoContainer



