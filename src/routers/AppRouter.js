import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import NewPostPage from '../components/NewPostPage';
import LoginPage from '../components/LoginPage';
import ViewPostPage from '../components/ViewPostPage';
import EditProfilePage from '../components/EditProfilePage';
import EditBlogs from '../components/EditBlogs';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <PrivateRoute path="/create" component={NewPostPage} />
        <PrivateRoute path="/view/:id" comp="ViewPostPage" component={ViewPostPage} />
        <PrivateRoute path="/profile/:uid" comp="EditProfilePage" component={EditProfilePage} />
        <PrivateRoute path="/edit/:id" comp="ViewPostPage" component={EditBlogs} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
