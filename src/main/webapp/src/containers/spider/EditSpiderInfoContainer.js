/**
 * Created by Administrator on 2017/9/17.
 */
import { connect } from 'react-redux'
import EditSpiderInfoComponent from '../../components/spider/EditSpiderInfoComponent'
import { saveFormData,showInfo,hideInfo,showAllSeting} from '../../actions'
const mapStateToProps = (state) => ({
    msg:state.msg,
    visible:state.visible,
    notifyIcon:state.notifyIcon,
    notifyTitle:state.notifyTitle,
    formDetail:state.formDetail,
    formVisiable:state.formVisiable
});
const mapDispatchToProps = (dispatch) => ({
    saveFormData:(fieldsValue)=>{
        dispatch(saveFormData(fieldsValue))
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



