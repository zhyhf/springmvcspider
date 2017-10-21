/**
 * Created by Administrator on 2017/9/17.
 */
import React from 'react'
import {Modal, Table, Icon, Form, Input, Button, Select, Switch,Checkbox,message,notification } from 'antd';
import classNames from 'classnames';
import $ from 'jquery';          //jquery
const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;
const { TextArea } = Input;

class EditSpiderInfoForm extends React.Component{

    render() {
        const formItemLayout = {
            labelCol: { span: 24 },
            wrapperCol: { span: 24 },
        };
        const { getFieldDecorator } = this.props.form;
        const items=<div >
            <FormItem {...formItemLayout} label="ID" hasFeedback>
                {getFieldDecorator('id', { rules: [{ required: false, message: '请不要手动赋值', whitespace: true }],
                })
                (<Input  />)
            }
            </FormItem>

                <FormItem {...formItemLayout} label="thread" hasFeedback>
                        {getFieldDecorator('thread', { rules: [{ required: false, message: 'thread', whitespace: true }]
                        })
                        (<Input  />)
                    }
                    </FormItem>

                        <FormItem {...formItemLayout} label="retry" hasFeedback>
                        {getFieldDecorator('retry', { rules: [{ required: false, message: 'retry', whitespace: true }]
                        })
                        (<Input  />)
                    }
                    </FormItem>

                        <FormItem {...formItemLayout} label="sleep" hasFeedback>
                        {getFieldDecorator('sleep', { rules: [{ required: false, message: 'sleep', whitespace: true }],
                        })
                        (<Input  />)
                    }
            </FormItem>

        <FormItem {...formItemLayout} label="maxPageGather(请在导出模板前将最大抓取数量设置为生产环节中正确的值" hasFeedback>
        {getFieldDecorator('maxPageGather', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="timeout" hasFeedback>
        {getFieldDecorator('timeout', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>

        <FormItem {...formItemLayout} label="contentReg" hasFeedback>
        {getFieldDecorator('contentReg', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>

        <FormItem {...formItemLayout} label="contentXPath" hasFeedback>
        {getFieldDecorator('contentXPath', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="titleReg" hasFeedback>
        {getFieldDecorator('titleReg', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="titleXPath" hasFeedback>
        {getFieldDecorator('titleXPath', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>

        <FormItem {...formItemLayout} label="categoryReg" hasFeedback>
        {getFieldDecorator('categoryReg', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="categoryXPath" hasFeedback>
        {getFieldDecorator('categoryXPath', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="defaultCategory" hasFeedback>
        {getFieldDecorator('defaultCategory', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="urlReg" hasFeedback>
        {getFieldDecorator('urlReg', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="charset" hasFeedback>
        {getFieldDecorator('charset', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="publishTimeXPath" hasFeedback>
        {getFieldDecorator('publishTimeXPath', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="publishTimeReg" hasFeedback>
        {getFieldDecorator('publishTimeReg', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="publishTimeFormat" hasFeedback>
        {getFieldDecorator('publishTimeFormat', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="lang" hasFeedback>
        {getFieldDecorator('lang', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="country" hasFeedback>
        {getFieldDecorator('country', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="callbackURL(多个回调地址请使用json格式书写，例如['http://news.qq.com','http://news.qq.com/dfs'])" hasFeedback>
        {getFieldDecorator('callbackURL', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="userAgent" hasFeedback>
        {getFieldDecorator('userAgent', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="proxyHost" hasFeedback>
        {getFieldDecorator('proxyHost', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="proxyPost" hasFeedback>
        {getFieldDecorator('proxyPost', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="proxyUsername" hasFeedback>
        {getFieldDecorator('proxyUsername', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <FormItem {...formItemLayout} label="proxyPassword" hasFeedback>
        {getFieldDecorator('proxyPassword', { rules: [{ required: false, message: '', whitespace: true }],
        })
        (<Input  />)
    }
    </FormItem>
        <div style={{height:40}}>
            <span style={{float:"left"}}>
            <Button style={{ marginRight: 10}} type="primary" ghost>添加动态字段</Button>
                <Button style={{marginRight: 10}} type="primary" ghost>添加静态字段</Button>
                </span>
        </div>

        <FormItem {...formItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('doNLP', {
            valuePropName: 'checked',
        })(
        <Checkbox >是否进行nlp处理(包括摘要、关键词、命名实体抽取)</Checkbox>
        )}
    </FormItem>
        <FormItem {...formItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('gatherFirstPage', {
            valuePropName: 'checked',
        })(
        <Checkbox >是否只抓取首页</Checkbox>
        )}
    </FormItem>

        <FormItem {...formItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('needTitle', {
            valuePropName: 'checked',
        })(
        <Checkbox >是否网页必须有标题</Checkbox>
        )}
    </FormItem>
        <FormItem {...formItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('needContent', {
            valuePropName: 'checked',
        })(
        <Checkbox >是否网页必须有正文</Checkbox>
        )}
    </FormItem>
        <FormItem {...formItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('needPublishTime', {
            valuePropName: 'checked',
        })(
        <Checkbox >是否网页必须有发布时间</Checkbox>
        )}
    </FormItem>
        <FormItem {...formItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('saveCapture', {
            valuePropName: 'checked',
        })(
        <Checkbox >是否保存网页快照，默认保存</Checkbox>
        )}
    </FormItem>
        <FormItem {...formItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('ajaxSite', {
            valuePropName: 'checked',
        })(
        <Checkbox >是否是ajax网页</Checkbox>
        )}
    </FormItem>


        </div>;
        const fullItem=this.props.formVisiable ? items: null;

        return (
            <Form layout={'horizontal'}>
            <FormItem {...formItemLayout} label="siteName" hasFeedback>
        {getFieldDecorator('siteName', { rules: [{ required: true, message: 'Please input your siteName!', whitespace: true }]})
        (<Input />)
    }
    </FormItem>

        <FormItem {...formItemLayout} label="domain" hasFeedback>
        {getFieldDecorator('domain', { rules: [{ required: true, message: 'Please input your domain!', whitespace: true }]})
        (<Input />)
    }
    </FormItem>

        <FormItem {...formItemLayout} label="startURL(多个起始请使用json格式书写，例如   ['http://news.qq.com','http://news.qq.com/dfs/fg']   )" hasFeedback>
        {getFieldDecorator('startURL', { rules: [{ required: true, message: 'Please input your startUrl!', whitespace: true }]})
        (<Input />)
    }
    </FormItem>
        {fullItem}
        <FormItem {...formItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('autoDetectPublishDate', {
            valuePropName: 'checked',
        })(
        <Checkbox >是否自动探测发布日期，尽量收到配置，自动探测费时，默认关闭</Checkbox>
        )}
    </FormItem>

        <FormItem {...formItemLayout} label="json爬虫模板" hasFeedback>
        {getFieldDecorator('jsonTemplate', { rules: [{ required: false, message: 'Please input your startUrl!', whitespace: true }]})
        (<TextArea placeholder="" autosize={{ minRows: 6, maxRows: 20 }} />)
    }
    </FormItem>
        </Form>
    );
    }
}

EditSpiderInfoForm = Form.create()(EditSpiderInfoForm);

export default class EditSpiderInfoComponent extends React.Component{
    saveTemplate() {
        this.refs.editForm.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            const { saveFormData } = this.props;

        var formValues=fieldsValue;
        formValues.startURL=eval(fieldsValue.startURL);
        formValues.callbackURL=eval(fieldsValue.callbackURL);
        console.log('表单值：', formValues);
        saveFormData(formValues);
        });
    }
    showAllSetting(){
        const { showAllSeting } = this.props;
        showAllSeting();
    }
    componentDidUpdate(){
        this.info();
        this.showFormDetail();
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

    showFormDetail(){
        const { visible,msg } = this.props;
        if(visible){
            message.info(msg);
        }
    }
    render() {
        return (
            <div className="sup-body">
                <div style={{height:40}}>
                    <span style={{float:"left"}}>
                        <Button onClick={this.saveTemplate.bind(this)} style={{marginRight: 10}} type="primary" ghost>存储此模板</Button>
                        <Button style={{ marginRight: 10}} type="primary" ghost>自动填充</Button>
                        <Button style={{marginRight: 10}} type="primary" ghost>抓取样例数据</Button>
                    </span>
                        <span style={{float:"right"}}>

                            <Button style={{marginRight: 10}} type="danger" >导出模板</Button>
                            <Button type="danger" onClick={this.showAllSetting.bind(this)}>高级配置</Button>
                        </span>
                 </div>
                <EditSpiderInfoForm formVisiable={this.props.formVisiable} ref='editForm' />

            </div>
        )
    }
}


//<div  style={{ background: 'grey',width:'100%'}}>
//<span style={{float:"left", background: 'red',width:'33.3%',height:'100px'}}>
//1111
//</span>
//<span  style={{float:"right", background: 'blue',width:'66.6%'}}>
//<div  style={{ background: 'grey',width:'100%'}}>
//<span style={{float:"left", background: 'yellow',width:'50%',height:'200px'}}>
//2222
//</span>
//<span  style={{float:"right", background: 'green',width:'50%',height:'300px'}}>
//3333
//</span>
//</div>
//</span>
//</div>