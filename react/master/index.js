import React, { Component } from 'react';
 import {Menuleft,BigHome} from'./menu';
 import {Layout }from 'choerodon-ui'
export default class Master extends Component {
  render() {
    const { AutoRouter } = this.props;
    return (
      <Layout>
        <BigHome>
        </BigHome>
        <Layout>
        <Menuleft>
        </Menuleft>
        <AutoRouter />
        </Layout>
        </Layout>
    );

  }
}