import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Table } from 'choerodon-ui';
import { Action, Content, Header, Page } from '@choerodon/boot';
import Store from './stores/Store';

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
        title: '名字',
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
            text: '修改',
            // action: this.showModal.bind(this, record.id),
          }];
          if (record.enabled) {
            actionDatas.push({
              icon: '',
              type: 'site',
              text: '停用',
              // action: this.handleEnable.bind(this, record),
            });
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
        <Header title="表格演示">
          <Button
            onClick={this.handleRefresh}
            icon="refresh"
          >
            刷新
          </Button>
        </Header>
        <Content
          title="标题"
          description="描述"
          link="#"
        >
          {this.renderTable()}
        </Content>
      </Page>
    );
  }
}

export default TableDemo;
