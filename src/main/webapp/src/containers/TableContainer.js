/**
 * Created by Administrator on 2017/9/2.
 */
import { connect } from 'react-redux'
import TableComponent from '../components/tables/TableComponent'
import { getTableDatas,fetchPosts,showModel,showInfo,hideInfo } from '../actions'

const mapStateToProps = (state) => ({
    visible:state.visible,
    msg:state.msg,
    notifyIcon:state.notifyIcon,
    notifyTitle:state.notifyTitle,
    modelVisible:state.modelVisible,
    columns: state.columns,
    recordDetail:state.recordDetail,
    tableDatas:state.tableDatas
});
const mapDispatchToProps = (dispatch) => ({
    getTableDatas: () => {
        dispatch(getTableDatas())
    },
    submitRecord:(values)=>{
        dispatch(fetchPosts(values))
    },
    showModal: (visible) => {
        dispatch(showModel(visible))
    },
    hideInfo:()=>{
        dispatch(hideInfo())
    },
});

const TableContainer = connect(mapStateToProps,mapDispatchToProps)(TableComponent);

export default TableContainer

