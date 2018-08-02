import React from 'react';
import { connect } from 'react-redux';
import selectDetails from '../selectors/detail';

export class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }


render() {
    return (
      <div className="content-container">

        <form>
          <div>
            <h1>Name</h1>
            <input
              type="text"
              className="text-input"
              value={this.props.detail[0].name}
            />
          </div>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
});

const mapStatetoProps = (state, props) => {
  return {
    detail: selectDetails(state.detail)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(EditProfilePage);
