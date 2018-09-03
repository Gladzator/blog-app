import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startSetDetails } from '../actions/detail';
import selectDetails from '../selectors/detail';
import { startAddDetail } from '../actions/detail';  //startAddFile
import database from '../firebase/firebase';
import NameForm from './NameForm';
// import FileField from './FileField';


class NameModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedOption: undefined,
        // pictureUrl: null
      }
    };


    closeModal = (name) => {
        this.props.startAddDetail(name);
        this.setState(() => ({ selectedOption: undefined}));
        // this.props.startAddFile({picture: this.state.picture})
      }
    // displayPicture(event) {
    //   let reader = new FileReader();
    //   let file = event.target.files[0];
    //   reader.onloadend = () => {
    //     this.setState({
    //       picture: file,
    //       pictureUrl: reader.result
    //     })
    //     const pictureUrl = this.state.pictureUrl
    //   };
    //   reader.readAsDataURL(file);
    // }
    render (){
    return(
      <div>
      <Modal
        isOpen={( this.props.details.length === 0 )}
        onRequestClose={this.closeModal}
        contentLabel="Enter your name"
        className="modal_name"
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        <h3 className="modal__title">Enter your name</h3>
        <NameForm
          className="modalButton"
          onSubmit = {this.closeModal}
        />
            {/* <button className="modalButton" onClick={this.closeModal}>Confirm</button> */}
      </Modal>
  </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddDetail: (detail) => dispatch(startAddDetail(detail)),
  // startAddFile: (file) => dispatch(startAddFile(file))
});

const mapStatetoProps = (state) => {
  return {
    uid: state.auth.uid,
    details: (state.detail)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(NameModal);
