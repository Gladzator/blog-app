import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startSetDetails } from '../actions/detail';
import selectDetails from '../selectors/detail';
import { startAddDetail } from '../actions/detail';
import database from '../firebase/firebase';


class NameModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedOption: undefined,
        name: props.details.name ? props.details.name : '',
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
        let name=this.uname
        this.props.startAddDetail({name: name})
        this.setState(() => ({ selectedOption: undefined, name: name }));
      }

    }
    render (){
    return(
      <div>
      <Modal
        isOpen={( this.props.details.length === 0 )}
        onRequestClose={this.closeModal}
        contentLabel="Enter your name"
        className="modal"
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
            <button className="modalButton" onClick={this.closeModal}>Confirm</button>
        </form>
    </Modal>
  </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddDetail: (detail) => dispatch(startAddDetail(detail))
});

const mapStatetoProps = (state) => {
  return {
    uid: state.auth.uid,
    details: (state.detail)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(NameModal);
