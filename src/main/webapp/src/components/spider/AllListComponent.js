/**
 * Created by Administrator on 2017/9/15.
 */
/**
 * Created by Administrator on 2017/9/2.
 */
import React from 'react'
import {Modal, Table, Icon, Form, Input, Button, Select, DatePicker,message,notification  } from 'antd';
import classNames from 'classnames';
import $ from 'jquery';          //jquery
const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;

const SearchInput = React.createClass({
    getInitialState() {
        return {
            value: '',
            focus: false,
        };
    },
    handleInputChange(e) {
        this.setState({
            value: e.target.value,
        });
    },
    handleFocusBlur(e) {
        this.setState({
            focus: e.target === document.activeElement,
        });
    },
    handleSearch() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.value);
        }
    },
     
  
    render() {
        const { style, size, placeholder } = this.props;
        const btnCls = classNames({
            'ant-search-btn': true,
            'ant-search-btn-noempty': !!this.state.value.trim(),
        });
        const searchCls = classNames({
            'ant-search-input': true,
            'ant-search-input-focus': this.state.focus,
        });
        return (
                <div className="ant-search-input-wrapper" style={style}>
                    <InputGroup className={searchCls}>
                    <Input placeholder={placeholder} value={this.state.value} onChange={this.handleInputChange}
                        onFocus={this.handleFocusBlur} onBlur={this.handleFocusBlur} onPressEnter={this.handleSearch} />
                        <div className="ant-input-group-wrap">
                                <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch} />
                        </div>
                    </InputGroup>
                </div>
                );
        },
});

export default class AllListComponent extends React.Component{
    constructor(props){
        super(props);
    }
    refreshTables(){
        const { getTableDatas } = this.props;
        getTableDatas(15,1);
    }
    showModal() {
        const { showModal } = this.props;
        showModal(true);
    }
      componentDidMount(){
        this.refreshTables();
    }
    componentDidUpdate(){
        this.refreshTables();
    }

    getOperationColumn(){
        const {showRecord,editTemplate,deleteTemplateById,startTemplate} = this.props;
        var operationColumns=
        [
            {
                title: '查看',
                dataIndex: 'show',
                key: 'show',
                render: (text, record) => (
                    <span>
                        <a href="javascript:void(0)" onClick={function(record){
                                showRecord(record)
                        }.bind(this, record)}>show</a>
                    </span>
                )
            },
            {
                title: '编辑',
                    dataIndex: 'edit',
                    key: 'edit',
                    render: (text, record) => (
                        <span>
                        <a href="javascript:void(0)" onClick={function(record){
                            editTemplate(record)
                        }.bind(this, record)}>edit</a>
                        </span>
                    )
            },
            {
                title: '删除',
                    dataIndex: 'delete',
                    key: 'delete',
                    render: (text, record) => (
                        <span>
                        <a href="javascript:void(0)" onClick={function(record){
                            deleteTemplateById(record.key)
                        }.bind(this, record)}>delete</a>
                        </span>
                    )
            },
            {
            title: '启动',
                dataIndex: 'start',
                key: 'start',
                render: (text, record) => (
                    <span>
                    <a href="javascript:void(0)" onClick={function(record){
                        startTemplate(record)
                    }.bind(this, record)}>启动</a>
                    </span>
                )
            },
            {
                title: '定时任务',
                    dataIndex: 'startTimeTask',
                    key: 'startTimeTask',
                    render: (text, record) => (
                    <span>
                    <a href="javascript:void(0)" onClick={function(record){
                        alert('key:' + record.key+"网站:"+record.domain+"时间:"+record.time)
                    }.bind(this, record)}>创建定时任务</a>
                    </span>
                    )
            },
        ];
        return operationColumns;
    }

    componentWillReceiveProps(){}
    componentDidUpdate(){
        this.info();
        this.showRecordModel();
    }
     info ()  {
        const { visible,msg,hideInfo,notifyTitle,notifyIcon } = this.props;
        if(visible){
            this.openNotificationWithIcon(notifyIcon,notifyTitle,msg);
            hideInfo();
        }
    };
      openNotificationWithIcon(type,notifyTitle,message) {
        notification[type]({
            message: notifyTitle,
            description: message,
        });

    };

    showRecordModel(){
        const { visible,msg } = this.props;
        if(visible){
            message.info(msg);
        }
    }
    render() {
        const { submitRecord,listColumns } = this.props;
        const operationColumns=this.getOperationColumn();
        const columns=listColumns.concat(operationColumns);

        return (
            <div className="sup-body">
                <div style={{height:40}}>
                    <span style={{float:"left"}}>
                        <SearchInput placeholder="请输入字段1关键字" onSearch={value => console.log(value)} style={{ width: 300 }}/>
                    </span>
                    <span style={{float:"right"}}>
                        <Button type="primary" onClick={this.showModal.bind(this)}>新增</Button>
                        <Button type="primary" onClick={this.refreshTables.bind(this)}>刷新</Button>
                    </span>
                </div>
                <Table columns={columns} dataSource={this.props.listDatas} size="middle" />
            </div>
        )
    }
}