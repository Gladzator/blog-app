import React from 'react';
import { connect } from 'react-redux';
import { startEditDetails } from '../actions/detail';
import selectDetails from '../selectors/detail';
import {editAllUid} from '../actions/allUid';


class EditPageName extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      name: props.name ? props.name : '',
    }
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }))
  }
  savename_button = (e) => {
    console.log(this.props);
    e.stopPropagation();
    const name=this.state.name;
    this.props.startEditDetails(this.props.detail[0].id,{name:name});
    this.props.editAllUid({name:name})
    this.props.nameChange(name);
  }
  render() {
    return (
      <div className="edit_name_content">
        <div className="edit_list-header" >
            <h3 className="edit_list-item__title">Name</h3>
        </div>
        <div className="edit_list-item">
          <input
            className="edit_input-name"
            value={this.state.name}
            onChange={this.onNameChange}
          />
        </div>
        <button className="button savename_button" onClick={this.savename_button}>Save</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditDetails: (id,detail) => dispatch(startEditDetails(id,detail)),
  editAllUid: (name) => dispatch(editAllUid(name))
});

const mapStatetoProps = (state, props) => {
  console.log(state)
  return {
    auth: state.auth,
    detail: selectDetails(state.detail),
    uid_name: state.allUid[0]
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(EditPageName);
