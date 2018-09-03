import React from 'react';
import Modal from 'react-modal';

class RemoveModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    return(
      <Modal
        isOpen={!!this.props.selectedOption}
        onRequestClose={this.closeModal}
        contentLabel="Are You Sure?"
        className="modal_name"
      >
        <h3 className="remove_modal__title">Are you sure?</h3>
        <div className="remove_modal__body">
          <button className="modalButton" onClick={this.props.removeBlog}>I'm Sure</button>
          <button className="modalButton" onClick={this.props.closeModal}>Go Back</button>
        </div>
    </Modal>
    )
  }
};
export default RemoveModal;
