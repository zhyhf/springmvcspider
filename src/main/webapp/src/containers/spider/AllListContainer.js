/**
 * Created by Administrator on 2017/9/15.
 */

import { connect } from 'react-redux'
import AllListComponent from '../../components/spider/AllListComponent'
import { getListDatas,getAllTemplates,fetchPosts,showModel,showRecord,showInfo,hideInfo,deleteTemplateById } from '../../actions'

const mapStateToProps = (state) => ({
    listColumns: state.listColumns,
    listDatas:state.listDatas,
    recordDetail:state.recordDetail,
    notifyIcon:state.notifyIcon,
    notifyTitle:state.notifyTitle,
    msg:state.msg,
    visible:state.visible
});
const mapDispatchToProps = (dispatch) => ({
    getTableDatas: (size,page) => {
        dispatch(getAllTemplates(size,page))
    },
    submitRecord:(values)=>{
        dispatch(fetchPosts('reactjs',values))
    },
    showRecord:(record)=>{
        dispatch(showRecord(record))
    },
    showModal: (visible) => {
        dispatch(showModel(visible))
    },
    deleteTemplateById:(id)=>{
        dispatch(deleteTemplateById(id))
    },
    hideInfo:()=>{
        dispatch(hideInfo())
    },
});

const AllListContainer = connect(mapStateToProps,mapDispatchToProps)(AllListComponent);

export default AllListContainer

