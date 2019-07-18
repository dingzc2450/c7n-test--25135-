import { Modal, Button,Select  } from 'choerodon-ui';
import React, { Component } from 'react';
const { Option } = Select;
const confirm = Modal.confirm;
import Store from './store';
class SelectOrg extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '汉得',
      };
    }
  
    handleChange = (value, oldValue) => {
        Store.setOrgName(value);
    }
  
    render() {
      return (
        <Select name="last-name" placeholder="请选择" value={this.state.value} onChange={this.handleChange}>
          <Option value="汉得">汉得</Option>
          <Option value="汉得123">汉得123</Option>
          <Option value="123汉得">123汉得</Option>
        </Select>
      );
    }
  }
  

class OrgInform extends Component{
    constructor(props) {
        super(props);
      
    }
    render(){
        return (
            <div>
            <SelectOrg ></SelectOrg>
        </div>
        );
        

    }
}
export const showConfirm= function () {
    const a=confirm({
        title: '选择',
        content:<OrgInform ></OrgInform>,
        onOk() {        
          console.log("ok");
        },
        onCancel() {
            Store.setOrgName("选择项目");
          console.log('Cancel');
        },
      });
     
  
}