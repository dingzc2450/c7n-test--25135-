import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import { asyncRouter, nomatch } from '@choerodon/boot';

const Role = asyncRouter(() => import('./role'));
const Home=asyncRouter(() => import('./home'));
@inject('AppState')
class RouteIndex extends React.Component {
  render() {
    const { match, AppState } = this.props;
    return (
      <Switch>
         <Route path={`${match.url}/home`} component={Home} />

        <Route path={`${match.url}/role`}component={Role} />
      </Switch>
    );
  }
}

export default RouteIndex;
