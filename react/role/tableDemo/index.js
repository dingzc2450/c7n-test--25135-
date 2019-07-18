import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Table,Menu,Dropdown ,Icon } from 'choerodon-ui';
import { Action, Content, Header, Page } from '@choerodon/boot';
import Store from './stores/Store';
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://choerodon.io/">全局</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://choerodon.io/">组织</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="https://choerodon.io/">项目</a>
    </Menu.Item>
  </Menu>
);
@observer
class TableDemo extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    Store.loadData();
  }

  renderLevel(text) {
    const LEVEL_MAP = {
      organization: '组织',
      project: '项目',
    };
    return LEVEL_MAP[text] || '全局';
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

  render() {
    return (
      <Page className="choerodon-role">
        <Header title="角色管理">
        <Dropdown overlay={menu} trigger={['click']}>
         <a className="c7n-dropdown-link" href="#">
            全局<Icon type="arrow_drop_down" />
          </a>
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
