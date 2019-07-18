import {axios} from '@choerodon/boot'
import React, { Component } from 'react';
import { Action, Content, Header, Page } from '@choerodon/boot';

class User extends Component{
    userApi='';

    constructor(props){
        super(props);
        this.state={info:"123"};
        this.userApi="/iam/v1/users/self";
        this.getUserInfo("/iam/v1/users/self");
    }
    getUserInfo(url){
        axios.get(url).then(function(data){
            console.log(data);
        })
    }
    render(){
        return(
            <Page className="choerodon-user">
        <Header title="个人信息">
          
        </Header>
        <Content>
        </Content>
      </Page>
        );
    }
}


export default User;