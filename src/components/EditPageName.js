import React from 'react';

class EditPageName extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name ? props.name : '',
    }
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }))
  }
  savename_button = () => {
    console.log(this.props)
    this.props.nameChange();
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

export default EditPageName;
