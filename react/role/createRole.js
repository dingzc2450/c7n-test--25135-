import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Tabs, Button, Form, Input, Select, Row, SelectBox, Menu, Dropdown, Icon } from 'choerodon-ui';
import { Action, Content, Header, Page } from '@choerodon/boot';
import Store from './tableDemo/stores/Store';
const { Option } = Select;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
@observer
class CreateRole extends Component {
  componentDidMount() {
    this.loadTab();
    this.loadLabel();
  }
  loadTab() {
    Store.loadTab();
  }
  renderLevel(text) {
    const LEVEL_MAP = {
      organization: '组织',
      project: '项目',
    };
    return LEVEL_MAP[text] || '全局';
  }
  renderOptions() {
    console.log('renderOptions!!');
    const options=[];
    for(let item of Store.lables){
      
      options.push(<Option key={item.id}>{item.name}</Option>);
    }
    return options;
  }
  loadLabel() {
    Store.loadLabel();

    
  }
  handleSaveInStore(){
    console.log('handleSaveInStore');
    const { getFieldsValue } = this.props.form;
    let data=Store.createRoleData;
    let newData=getFieldsValue();  
    console.log(newData);

    data.code.suffix=newData.code;
    data.name=newData.name;
    data.lables=newData.lables;
    console.log(data);
    Store.setcreateRoleData(data);
    console.log(Store.getCreateRoleData);


  }
  renderInput() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical" >
        <FormItem style={{ display: "inline-block" }}
          lable='请输入角色编码'
        >
          {getFieldDecorator('code', {
            rules:
              [{
                required: true,
                pattern: /^[a-zA-Z][A-Za-z0-9_\/\-]*$/,
                message: '编码必须以字母开头，只能输入字母，数字，_，-，/'
              }],
          })(
            <Input
              prefix={Store.createRoleData.code.prefix}
              label="角色编码"
              name="code"
              placeholder="请输入角色编码"
              size="large"

            />
          )}
        </FormItem>
        <FormItem style={{ display: "inline-block" }}>
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
        {getFieldDecorator('lables', {
            
          })(
            <Select
            mode="tags"
            size="default"
            placeholder="角色标签"
            name="lables"
            onChange={() => null}
            style={{ width: '100%' }}
          >
            {this.renderOptions()}

          </Select>
          )}
         
        </FormItem>
        <FormItem>
          {this.renderTab()}
        </FormItem>
        <div>
          <FormItem>

            <Button type="primary" funcType="raised" htmlType="submit" onClick={this.handleSaveInStore.bind(this)}>创建</Button>
            <Button funcType="raised">取消</Button>
          </FormItem>

        </div>


      </Form>
    );
  }
  renderTabPane() {
    const tabPanes = [];
    tabPanes.push(<TabPane tab={`${this.renderLevel(Store.level)}层`} key="1">Content of Tab Pane 1</TabPane>);

    if (Store.level === 'site') {
      tabPanes.push(<TabPane tab="个人中心" key="2">个人中心</TabPane>);
    }
    return tabPanes;
  }
  renderTab() {
    return (

      <div>
        <span
          style={{ marginRight: "80px", fontSize: "16px" }}
        >菜单分配</span>
        <Button funcType="flat" type="primary" icon={Store.isOpenMenu ? 'expand_less' : 'expand_more'}>全部{Store.isOpenMenu ? '收齐' : '展开'}</Button>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          {this.renderTabPane()}
        </Tabs>
      </div>
    );

  }
  callback() {

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
        <div style={{ lineHeight: "39px" }}>
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
