import React, { Component } from 'react';
 import {Menuleft,BigHome} from'./menu';
 import {Layout }from 'choerodon-ui';

export default class Master extends Component {

  render() {
    const { AutoRouter } = this.props;
    const { Content } = Layout;
 

    return (
      <Layout>
      <BigHome></BigHome>
    <Layout className="content">
      <Menuleft></Menuleft>
    <Layout>
      <Content style={{backgroundColor:"#fff",position: "relative"}}>
      <AutoRouter /> 
      </Content>
        
    </Layout>
        
    
    </Layout>
  </Layout>
    );

  }
}