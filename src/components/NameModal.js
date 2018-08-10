import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startSetDetails } from '../actions/detail';
import selectDetails from '../selectors/detail';
import { startAddDetail } from '../actions/detail';  //startAddFile
import database from '../firebase/firebase';
import FileField from './FileField';

class NameModal extends React.Component {
    constructor(props) {
      super(props);
      console.log(props)
      this.state = {
        selectedOption: undefined,
        name: props.details.name ? props.details.name : '',
        // pictureUrl: null
      }
      let uname;

    };

    onNameChange = (e) => {
      const name = e.target.value;
      this.setState(() => ({ selectedOption: this.props.details.id, name }));
      this.uname=name
    };


    closeModal = (e) => {
      e.preventDefault();

      if(this.uname !=='') {
        let name=this.uname;
        this.props.startAddDetail({name: name});
        // this.props.startAddFile({picture: this.state.picture})
        this.setState(() => ({ selectedOption: undefined, name: name }));
      }

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
        <form>
          <input
              type="text"
              placeholder="Enter your name..."
              className="text-input"
              autoFocus
              value={this.state.name}
              onChange={this.onNameChange}
            />
            {/* <input
              type="file"
              onChange={(event) => {
                this.displayPicture(event);
              }}
            /> */}
            <button className="modalButton" onClick={this.closeModal}>Confirm</button>
        </form>
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
