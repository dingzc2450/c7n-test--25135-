import { Layout, Menu,Dropdown, Breadcrumb, Icon,Avatar} from 'choerodon-ui';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;
import { Button } from 'choerodon-ui';

import React, { Component } from 'react';

class Top extends Component{
  render(){
    return(
      <Header className="header">
      <div className="logo" >
        <div className="c7n-boot-header-logo-default-icon">
          </div>
          <a class="c7n-boot-header-logo" href="#/" style="text-decoration: none;">
            Choerodon
            </a>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    
    );
  }
}
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://choerodon.io/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://choerodon.io/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
//头部
export class BigHome extends Component{
  render(){
    return(
      <Header className="header c7n-boot-header-wrap"style={{paddingLeft:"0px"}}>
        <div className="c7n-boot-header-left" >
        <div className="logo c7n-boot-header-logo-wrap" >
          <div className="c7n-boot-header-logo-icon c7n-boot-header-logo-default-icon"
          >
          </div>
          <a className="c7n-boot-header-logo">
            Choerodon</a>
        </div>
        </div>
        <div className="c7n-boot-header-center">
        <Button funcType="flat" style={{color:"white"}}>选择项目
        <Icon type="arrow_drop_down" />
        </Button>
        <Button funcType="flat" style={{color:"white"}}>管理
        <Icon type="settings" />
        </Button>
        </div>
        <div className="c7n-boot-header-right">
    <Dropdown placement='bottomCenter' overlay={menu} trigger={['click']}>
    <Button functype="flat" >
    <Icon type="apps"style={{color:"white"}} />
    </Button>
    </Dropdown>
    <Dropdown placement='bottomCenter' overlay={menu} trigger={['click']}>
    <Button functype="flat" >
    <Icon type="school"style={{color:"white"}} /></Button>
    </Dropdown>
    <Dropdown placement='bottomCenter' overlay={menu} trigger={['click']}>
    <Button functype="flat" >
    <Icon type="notifications"style={{color:"white"}} /></Button>
        </Dropdown>
    <Dropdown placement='bottomCenter' overlay={menu} trigger={['click']}>
    <Avatar src="./public/user.jpg" />
    </Dropdown>
        </div>
        
      </Header>       

    );
  }
}
//左侧导航
 export  class Menuleft extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Sider
          width={247}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className="c7n-menu"
          style={{ overflow: 'auto', height: '100vh', left: 0 }}
          
      > 
      
      <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
        <Icon type="menu"  />
      </Button>
      <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
              
      >
      <MenuItemGroup key="g1" title="Item 1">

            <Menu.Item key="1">
              <Icon type="domain" />
              <span> 组织类型</span>
             
              </Menu.Item>
            <Menu.Item key="2">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              
          </Menu.Item>
          <Menu.Item key="3">
              <Icon type="domain" />
              <span> 组织类型</span>
             
              </Menu.Item>
            <Menu.Item key="4">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              
          </Menu.Item>
          <Menu.Item key="5">
              <Icon type="domain" />
              <span> 组织类型</span>
             
              </Menu.Item>
            <Menu.Item key="6">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              
          </Menu.Item>
          <Menu.Item key="7">
              <Icon type="domain" />
              <span> 组织类型</span>
             
              </Menu.Item>
            <Menu.Item key="8">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              
          </Menu.Item>
          <Menu.Item key="9">
              <Icon type="domain" />
              <span> 组织类型</span>
             
              </Menu.Item>
            <Menu.Item key="10">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              
          </Menu.Item>
          <Menu.Item key="11">
              <Icon type="domain" />
              <span> 组织类型</span>
             
              </Menu.Item>
            <Menu.Item key="12">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              
          </Menu.Item>
          
      </MenuItemGroup>
     
      </Menu>
     
    </Sider>
    );
  }
}
