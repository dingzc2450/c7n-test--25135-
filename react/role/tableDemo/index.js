import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Table,Menu,Dropdown ,Icon } from 'choerodon-ui';
import { Action, Content, Header, Page } from '@choerodon/boot';
import Store from './stores/Store';

@observer
class TableDemo extends Component {
  componentDidMount() {
    this.loadData();
  }
  //下拉菜单列表 
  renderMenu= ()=>{
    let menu=(<Menu onClick={this.handleMenu}>
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
  renderBuiltIn(text){

  }
  renderTable = () => {
    const { isLoading, pagination } = Store;
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: '25%',
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
      },
      {
        title: '来源',
        dataIndex: 'builtIn',
        key: 'builtIn',
      },
      {
        title: '状态',
        dataIndex: 'enabled',
        key: 'enabled',
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
          }];
          if (record.enabled) {
            actionDatas.push({
              icon: '',
              type: 'site',
              text: '修改',
              // action: this.handleEnable.bind(this, record),
            });
          } else {
            actionDatas.push({
              icon: '',
              type: 'site',
              text: '停用',
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
        dataSource={Store.data.slice()}
        pagination={pagination}
        rowKey={record => record.id}
        onChange={this.handlePageChange}
        loading={isLoading}
        filterBarPlaceholder="过滤表"
      />
    );
  }
  handlePageChange(page){
    console.log('index.js page');
    console.log(page);
    Store.setPagination(page);
    Store.loadData();
  }
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
        <Button  icon="playlist_add">创建角色</Button>
        <Button  icon="content_copy" disabled >基于所选角色创建</Button>
          <Button
            onClick={this.handleRefresh}
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
