import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import EditProfilePage from './EditProfilePage';
import {firebase} from '../firebase/firebase';
// import DetailsDropDown from './DetailsDropDown';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/dashboard">
              <h1>Blogist</h1>
            </Link>
            <button
              className="button button--link"
              onClick={this.props.startLogout}
            >
              Logout</button>
              {/* <DetailsDropDown /> */}
              <Link to={`/profile/${firebase.auth().currentUser.uid}`}>
                <img onClick={this.onUser_Img_Click} src="/images/user.png"></img>
              </Link>
          </div>
        </div>
      </header>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
