import { Menu, Icon } from 'antd';
import React from 'react'
const SubMenu = Menu.SubMenu;

export default class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      current: 'userMgt',
      openKeys: []
    };
  }

  handleClick(e) {
      window.location.hash = e.key;
      this.setState({
          current: e.key,
          openKeys: e.keyPath.slice(1)
      });
  }

  render() {
    return (
      <Menu onClick={this.handleClick.bind(this)}
        style={{ width: '100%' }}
        penKeys = {this.state.openKeys}
        theme={'light'}
        defaultOpenKeys={['sub2','sub4',"sub1"]}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
       <SubMenu key="sub1" title={<span><Icon type="mail" /><span>爬虫功能</span></span>}>
            <Menu.Item key="editSpiderInfo">编辑模板</Menu.Item>
            <Menu.Item key="listSpiderInfo">模板列表</Menu.Item>
            <Menu.Item key="list">搜索</Menu.Item>
            <Menu.Item key="domainList">网站列表</Menu.Item>
            <Menu.Item key="tasks">查看进度</Menu.Item>
            <Menu.Item key="updateBySpiderInfoID">更新数据</Menu.Item>
            <Menu.Item key="listQuartz">定时任务管理</Menu.Item>
            <Menu.Item key="TableContainer">表格管理</Menu.Item>
          </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Echarts图表示例</span></span>}>
          <Menu.Item key="AreaStack">折线图</Menu.Item>
          <Menu.Item key="HeatmapCartesian">热力图</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>增删改查</span></span>}>
          <Menu.Item key="userMgt">用户管理</Menu.Item>

          <Menu.Item key="11">选项11</Menu.Item>
          <Menu.Item key="12">选项12</Menu.Item>
        </SubMenu>

      </Menu>
    );
  }
}
