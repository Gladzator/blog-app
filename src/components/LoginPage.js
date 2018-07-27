import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <nav className="nav__login">
      <div className="nav__login__header">
        <Link className="nav__login__link" to="#">Blogist</Link>
        <button className="button button--link" onClick={startLogin}>Login</button>
      </div>
    </nav>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
