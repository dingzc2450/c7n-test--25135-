import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Tabs, Button, Form ,Input,Select,Row,SelectBox,Menu,Dropdown ,Icon } from 'choerodon-ui';
import { Action, Content, Header, Page} from '@choerodon/boot';
import Store from './tableDemo/stores/Store';
const { Option } = Select;
const FormItem = Form.Item;
const TabPane=Tabs.TabPane;
@observer
class CreateRole extends Component {
  componentDidMount() {
    this.loadTab();
  }
  loadTab(){
    Store.loadTab();
  }

    renderInput(){
      const{getFieldDecorator}= this.props.form;
        return(
      <Form  layout="vertical" >
          <FormItem style={{display:"inline-block"}}
          lable='请输入角色编码'
          >
          {getFieldDecorator('code', {
            rules: 
            [{ 
              required: true, 
              pattern:/^[a-zA-Z][A-Za-z0-9_\/\-]*$/,
              message: '编码必须以字母开头，只能输入字母，数字，_，-，/' 
            }],
          })(
            <Input 
            prefix='/amdin/role'
            label="角色编码" 
            name="code"
            placeholder="请输入角色编码"
            size="large"
            
            />
          )}
            
          
        </FormItem>
        <FormItem style={{display:"inline-block"}}>
          {getFieldDecorator('name', {
            rules:
             [{ 
              required: true, 
              message: '请输入角色名称' 
            }],
          })(
            <Input 
            label="角色名称" 
            name="name" 
            placeholder="请输入角色名称"
            size="large"
            
            />
          )}
            
        </FormItem>
        <FormItem >
          <Select label="" name="角色标签" required>
              <Option value="M">role</Option>
          </Select>
      </FormItem>
      <FormItem>
      {this.renderTab()}
      </FormItem>
      <div>
      <FormItem>

      <Button type="primary" funcType="raised" htmlType="submit">创建</Button>
      <Button funcType="raised">取消</Button>
      </FormItem>
      
      </div>
      

      </Form>
        );
    }
    renderTab(){
      const arr=Store.level;
      return(
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab={arr} key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        </Tabs>
      );
     
    }
    callback(){

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
            <div style={{lineHeight: "39px"}}>
            <Header backPath="/index/role" title={`创建${this.renderLevel(Store.level)}角色`} >
            
            </Header>
            </div>
            <Content>
              {this.renderInput()}
            </Content>
          </Page>
        );
      }
}

CreateRole = Form.create({})(CreateRole);



export default CreateRole;
