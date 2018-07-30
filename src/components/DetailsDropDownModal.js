import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import selectDetails from '../selectors/detail';

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
            isOpen={!this.props.selectedOption}
            onRequestClose={this.props.closeModal}
            contentLabel="Enter your name"
            className="modal"
            overlayClassName="detail_modal"
            portalClassName="detail_modal"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
          >

            <h3 className="modal__title">{this.props.detail[0].name}</h3>

          </Modal>
        </div>

  </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
});

const mapStatetoProps = (state) => {
  console.log(state)
  return {
    detail: selectDetails(state.detail)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(DetailsDropDownModal);
