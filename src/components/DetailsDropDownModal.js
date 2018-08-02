import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import selectDetails from '../selectors/detail';
import { firebase } from '../firebase/firebase';
import { Link } from "react-router-dom";

class DetailsDropDownModal extends React.Component {
    constructor(props) {
      super(props);
      console.log(props)
    };
  render (){
    return(
      <div>
        <div>
          <Modal
            isOpen={!!this.props.selectedOption}
            onRequestClose={this.props.closeModal}
            contentLabel="Enter your name"
            className="modal"
            overlayClassName="detail_modal"
            portalClassName="detail_portal_modal"
          >

            <h1 className="drop_modal__title">{this.props.detail[0].name}</h1>
            <Link className="drop_modal__myprofile" to={`/profile/${firebase.auth().currentUser.uid}`}>My Profile</Link>
          </Modal>
        </div>

  </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
});

const mapStatetoProps = (state) => {
  return {
    detail: selectDetails(state.detail)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(DetailsDropDownModal);
