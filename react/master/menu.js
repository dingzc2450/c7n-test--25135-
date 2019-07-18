import { Layout, Menu,Dropdown, Breadcrumb, Icon,Avatar} from 'choerodon-ui';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;
import { Button } from 'choerodon-ui';

import React, { Component } from 'react';
class HeaderRight extends Component{
  render(){
    return(
      <div>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </div>
    );
  }
}
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
export class BigHome extends Component{
  render(){
    return(
      <Layout>
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
    </Layout>

    );
  }
}
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
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
      <Layout style={{ overflow: 'auto',height: '100vh', position: 'fixed', left: 0 }}>
     
      <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
        <Icon type="menu"  />
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={this.state.collapsed}       
      >
        <MenuItemGroup key="g1" title="平台设置">
            <Menu.Item key="1">
              <Icon type="domain" />
              组织类型
              </Menu.Item>
            <Menu.Item key="2">
              <Icon type="assignment_ind" />
              角色管理
              </Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup key="g1" title="平台设置">
            <Menu.Item key="3">
              <Icon type="domain" />
              组织类型
              </Menu.Item>
            <Menu.Item key="4">
              <Icon type="assignment_ind" />
              角色管理
              </Menu.Item>
      </MenuItemGroup>
     
      </Menu>
     
    </Layout>
    </Sider>
    );
  }
}
