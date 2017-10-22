/**
 * Created by Administrator on 2017/9/2.
 */
import React from 'react'
import 'antd/dist/antd.css';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Home from './home/home';
import TableContainer from '../containers/TableContainer';
import AllListContainer from '../containers/spider/AllListContainer';
import EditSpiderInfoContainer from '../containers/spider/EditSpiderInfoContainer';
// import UserMgtDemo from './antd/usermgt'
const ManageApp = () => (
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <Route path="TableContainer" component={TableContainer} />
                <Route path="listSpiderInfo" component={AllListContainer} />
                <Route path="editSpiderInfo" component={EditSpiderInfoContainer} />
            </Route>
        </Router>
);
export default ManageApp

