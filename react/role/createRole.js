import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Form ,Input,Select,SelectBox,Menu,Dropdown ,Icon } from 'choerodon-ui';
import { Action, Content, Header, Page } from '@choerodon/boot';
import Store from './tableDemo/stores/Store';
const { Option } = Select;

@observer
class CreateRole extends Component {
    renderInput(){
        return(
          <Form labelLayout="float" columns={2} >
          <Input colSpan={3} addonBefore='/amdin/role' label="角色编码" name="code" required placeholder="请输入角色编码" />
          <Input colSpan={3} label="角色名称" name="name" required placeholder="请输入角色名称" />
          <Select label="" name="角色标签" required>
              <Option value="M">role</Option>
          </Select>
      </Form>
        );
    }
    renderLevel(text) {
        const LEVEL_MAP = {
          organization: '组织',
          project: '项目',
        };
        return LEVEL_MAP[text] || '全局';
      }
    render() {
        return (
          <Page className="choerodon-role">
            <Button  icon="playlist_add" onClick={this.handleCreate}>返回</Button>

            <Header title={`创建${this.renderLevel(Store.level)}角色`}>
             
    
            </Header>
            <Content>
              {this.renderInput()}
            </Content>
          </Page>
        );
      }
}




export default CreateRole;
