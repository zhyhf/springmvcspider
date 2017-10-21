/**
 * Created by Administrator on 2017/9/2.
 */
import React from 'react'
import {Modal, Table, Icon, Form, Input, Button, Select, DatePicker,message,notification } from 'antd';
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
                           onFocus={this.handleFocusBlur} onBlur={this.handleFocusBlur} onPressEnter={this.handleSearch}
                    />
                    <div className="ant-input-group-wrap">
                        <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch} />
                    </div>
                </InputGroup>
            </div>
        );
    },
});

class FormDemo extends React.Component{
    handleSubmit(e) {
        e.preventDefault();
    }
    handleOk(e) {
        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            //// Should format date value before submit.
            // const values = {
            //     ...fieldsValue,
            //     'birthday': fieldsValue['birthday'].format('YYYY-MM-DD')
            // };
            const values =Object.assign({},fieldsValue,{'birthday': fieldsValue['birthday'].format('YYYY-MM-DD')});
            const { submitRecord,showModal } = this.props;
            submitRecord(values);
            showModal(false);
            console.log('收到表单值：', values);
        });
    }

    componentDidUpdate(){
        this.info();
    }
    info ()  {
        const { visible,msg,hideInfo } = this.props;
        if(visible){
            this.openNotificationWithIcon('success',msg);
            hideInfo();
        }
    };
    openNotificationWithIcon(type,message) {
        notification[type]({
            message: 'Notification Title',
            description: message,
        });
    };

    handleCancel(e) {
        const { showModal } = this.props;
        showModal(false);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        return (
        <Modal title="新增记录" visible={this.props.modelVisible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
            <Form layout={'horizontal'}  onSubmit={this.handleSubmit}>

                <FormItem {...formItemLayout} label="Name">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: 'Please input your name',
                        }],
                    })(
                        <Input placeholder="Please input your name" />
                    )}
                </FormItem>

                <FormItem  {...formItemLayout}  label="Select"  hasFeedback  >
                    {getFieldDecorator('depart', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Select placeholder="Please select a country">
                            <Option value="china">China</Option>
                            <Option value="use">U.S.A</Option>
                        </Select>
                    )}
                </FormItem>

                <FormItem  {...formItemLayout}  label="Birthday" >
                    {getFieldDecorator('birthday', config)(
                        <DatePicker />
                    )}
                </FormItem>
            </Form>
        </Modal>
        );
    }
}


FormDemo = Form.create()(FormDemo);


export default class TableComponent extends React.Component{

    constructor(props){
        super(props);
    }
    refreshTables(){
        const { getTableDatas } = this.props;
        getTableDatas();
    }
    showModal() {
        const { showModal } = this.props;
        showModal(true);
    }
    render() {
        const { submitRecord } = this.props;
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
                <FormDemo visible={this.props.visible} msg={this.props.msg} modelVisible={this.props.modelVisible} submitRecord={this.props.submitRecord} showModal={this.props.showModal} hideInfo={this.props.hideInfo}/>
                <Table columns={this.props.columns} dataSource={this.props.tableDatas} size="middle" />
            </div>
        )
    }
}