import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Table,Menu,Dropdown ,Icon } from 'choerodon-ui';
import { Action, Content, Header, Page, } from '@choerodon/boot';
import Store from './stores/Store';
import { Route, Switch,Link,NavLink  } from 'react-router-dom';


@observer
class TableDemo extends Component {

  componentDidMount() {
    this.loadData();   
    Store.setcreateRoleData();
  }
  //下拉菜单列表 

  renderMenu= ()=>{
    const menu=(<Menu onClick={this.handleMenu}>
      <Menu.Item key="site">
        <span>全局</span>
      </Menu.Item>
      <Menu.Item key="organization">
         <span>组织</span>
      </Menu.Item>
      <Menu.Item key="project">
        <span>项目</span>
      </Menu.Item>
    </Menu>);
    return menu;
  }
    
  loadData = () => {
    Store.loadData();
  }
  //由Mobx进行状态管理
  handleMenu(item, key){
    console.log('item+key+keypath');
    console.log(item);
    Store.setLevel(item.key);
  }
  //启用 停用 状态
  renderEnabled(value){
    if(value){
      return(
        <div><Icon type="check_circle"style={{color: "#28c1ca"}}></Icon>启用</div>
      );
    }
    else{
      return(
        <div><Icon type="remove_circle" style={{color: "gray"}}></Icon>停用</div>
      );
   }
  }
  renderBuiltIn(value){
    if(value){
      return(
        <div><Icon type="settings"></Icon>预定义</div>
      );
    }
    else{
      return(
        <div><Icon type="av_timer"></Icon>自定义</div>
      );

  }
}
  renderLevel(text) {
    const LEVEL_MAP = {
      organization: '组织',
      project: '项目',
    };
    return LEVEL_MAP[text] || '全局';
  }
  showLevel=()=>{
    return this.renderLevel(Store.level);
  }

  renderTable = () => {
    const { isLoading, pagination,selectedRowKeys } = Store;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      
    };
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: '25%',
        filters:[],
        onFilter: (value, record) => record.enabled.indexOf(value) === 0,

      },
      {
        title: '编码',
        dataIndex: 'code',
        key: 'code',
        width: '25%',
      },
      {
        title: '层级',
        dataIndex: 'level',
        key: 'level',
        filters: [
          {
            text: '全局',
            value: 'site',
          }, {
            text: '组织',
            value: 'organization',
          }, {
            text: '项目',
            value: 'project',
          }],
        render: text => this.renderLevel(text),
        onFilter: (value, record) => record.level.indexOf(value) === 0,
      },
      {
        title: '来源',
        dataIndex: 'builtIn',
        key: 'builtIn',
        render:text=>this.renderBuiltIn(text),
      },
      {
        title: '状态',
        dataIndex: 'enabled',
        key: 'enabled',
        filters: [
          {
            text: '启用',
            value: "true",
          }, {
            text: '停用',
            value: "false",
          }
        ],
        render:text=> this.renderEnabled(text),
        onFilter: (value, record) => {

          if(record.enabled.toString()===value)
          {
            return true;
          }
          return false;
        },

      },


      {
        title: '',
        key: 'action',
        align: 'right',
        render: (text, record) => {
          const actionDatas = [{
            icon: '',
            type: 'site',
            text: '基于该角色创建',
            // action: this.showModal.bind(this, record.id),
          },
          {
            icon: '',
            type: 'site',
            text: '修改',
            // action: this.handleEnable.bind(this, record),
          }
        ];
          if (record.enabled) {
            actionDatas.push(
              {
                icon: '',
                type: 'site',
                text: '停用',
                // action: this.handleEnable.bind(this, record),
              }
            );
          } else {
            actionDatas.push({
              icon: '',
              type: 'site',
              text: '启用',
              // action: this.handleEnable.bind(this, record),
            });
          }
          return <Action data={actionDatas} getPopupContainer={() => document.getElementsByClassName('page-content')[0]} />;
        },
      },
    ];
    return (
      <Table
        columns={columns}
        rowSelection={rowSelection}
        dataSource={Store.data.slice()}
        pagination={pagination}
        rowKey={record => record.id}
        onChange={this.handlePageChange}
        loading={isLoading}
        filterBarPlaceholder="过滤表"
      />
    );
  }
  onSelectChange=(selectedRowKeys, selectedRows)=>{
    Store.setSelectedRowKeys(selectedRowKeys);
  }
 
  handlePageChange(page){
    console.log('index.js page');
    console.log(page);
    Store.setPagination(page);
    Store.loadData();
  }
  handleRefresh(){
    Store.loadData();
  }
 
  //最终渲染
  render() {
    return (
      <Page className="choerodon-role">
        <Header title="角色管理">
        <Dropdown overlay={this.renderMenu()} trigger={['click']}>
          <div>
         <a className="c7n-dropdown-link" href="#">
            {this.showLevel()}<Icon type="arrow_drop_down" />
          </a>
          </div>
        </Dropdown>
        <NavLink to='/index/role/create'><Icon  type="playlist_add"></Icon>创建角色</NavLink>
        <Button  icon="content_copy" disabled={Store.isSelectedRowKeys}>基于所选角色创建</Button>
          <Button
            onClick={()=>{this.handleRefresh()}}
            icon="refresh"
          >
        
            刷新
          </Button>
         

        </Header>
        <Content
          title='平台"Choerodon"的角色管理'
          description="描述角色是您可分配给成员的一组权限。您可以创建角色并为其添加权限，也可以复制现有角色并调整其权限。"
          link="#"
        >
          {this.renderTable()}
        </Content>
      </Page>
    );
  }
}

export default TableDemo;
