import { Layout, Menu,Dropdown, Breadcrumb, Icon,Avatar} from 'choerodon-ui';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;
import { Button } from 'choerodon-ui';
import { Route, Switch,Link,NavLink  } from 'react-router-dom';
import {showConfirm} from './modal';
import React, { Component } from 'react';
import Store from './store';
import { observer } from 'mobx-react';

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
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
   
      </Menu>
      
    </Header>
    
    );
  }
}
const menu = (
 
  <Menu >
    <Menu.Item Key="0">
      <div>
      <NavLink to="/index/user">
      <Avatar size="large"  src="../public/user.jpg" />
      </NavLink>
      <div>
      <span>管理员</span>
      <span>1111@1111.com</span>
      </div>
      </div>
    </Menu.Item>
    <Menu.Item key="1">
      <NavLink to=" $889$">
      <Icon type="message_notification"></Icon>
        消息通知</NavLink>
    </Menu.Item>
    <Menu.Item key="2">
      <NavLink to=" $889$">
      <Icon type="person"></Icon>
        个人信息</NavLink>
    </Menu.Item>
    <Menu.Item key="3">
      <NavLink to=" $889$">
      <Icon type="vpn_key"></Icon>
        修改密码</NavLink>
    </Menu.Item>
    <Menu.Item key="4">
      <NavLink to=" $889$">
      <Icon type="authority"></Icon>
        权限信息</NavLink>
    </Menu.Item>
    <Menu.Item key="5">
      <NavLink to=" $889$">
      <Icon type="token"></Icon>
        授权管理</NavLink>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="7">
      <Icon type="exit_to_app"></Icon>
      退出登录</Menu.Item>
  </Menu>
);
//头部
@observer
export class BigHome extends Component{
  constructor(props){
    super(props);
    

  }

  handleItem(){
    showConfirm();
  }
  render(){
    return(
      <Header className="header c7n-boot-header-wrap"style={{paddingLeft:"0px"}}>
        <div className="c7n-boot-header-left" >
        <div className="logo c7n-boot-header-logo-wrap" >
          <div className="c7n-boot-header-logo-icon c7n-boot-header-logo-default-icon"
          >
          </div>
          <NavLink to="/">
          <div className="c7n-boot-header-logo">
            Choerodon</div>
          </NavLink>
         
        </div>
        </div>
        <div className="c7n-boot-header-center">
        <Button funcType="flat" style={{color:"white"}} onClick={this.handleItem.bind(this)}>{Store.orgName}
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
    <Avatar src="../public/user.jpg" />
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
            <NavLink to="/index/role">
              <Icon type="domain" />
              <span> 组织类型</span>
              </NavLink>
              </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/index/role">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
              <NavLink to="/index/role">
              <Icon type="domain" />
              <span> 组织类型</span>
              </NavLink>
             
              </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/index/role">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              </NavLink>
              
          </Menu.Item>
          <Menu.Item key="5">
              <NavLink to="/index/role">
              <Icon type="domain" />
              <span> 组织类型</span>
              </NavLink>
             
              </Menu.Item>
            <Menu.Item key="6">
              <NavLink to="/index/role">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              </NavLink>
              
          </Menu.Item>
          <Menu.Item key="7">
              <NavLink to="/index/role">
              <Icon type="domain" />
              <span> 组织类型</span>
              </NavLink>
             
              </Menu.Item>
            <Menu.Item key="8">
              <NavLink to="/index/role">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              </NavLink>
              
          </Menu.Item>
          <Menu.Item key="9">
              <NavLink to="/index/role">
              <Icon type="domain" />
              <span> 组织类型</span>
              </NavLink>
             
              </Menu.Item>
            <Menu.Item key="10">
              <NavLink to="/index/role">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              </NavLink>
              
          </Menu.Item>
          <Menu.Item key="11">
              <NavLink to="/index/role">
              <Icon type="domain" />
              <span> 组织类型</span>
              </NavLink>
             
              </Menu.Item>
            <Menu.Item key="12">
              <NavLink to="/index/role">
              <Icon type="assignment_ind" />
              <span> 角色管理</span>
              </NavLink>
              
          </Menu.Item>
          
      </MenuItemGroup>
     
      </Menu>
     
    </Sider>
    );
  }
}
