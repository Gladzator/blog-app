import React from 'react';
import { connect } from 'react-redux';
import selectDetails from '../selectors/detail';
import FileField from './FileField';
import EditPageName from './EditPageName';
import MyBlogs from './MyBlogs';
import PageSubHeader from './PageSubHeader';
// import Picture from './Picture';

export class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      nameChange: false
    }
  }

onNameChange = () => {
  this.setState(() => ({
    nameChange: true
  }));
}

onNameChangeClose = () => {
  this.setState(() => ({
    nameChange: false
  }));
}
render() {
    return (
      <div className="content-container edit_page">
        <div onClick={this.onNameChange} className="edit_name">
          <div className="edit_list-header" >
              <h3 className="edit_list-item__title">Name</h3>
                  {/* <Picture {...this.props}/> */}
          </div>
          <div className="edit_list-item">
            <h3 className="edit_list-item__data">{this.props.detail[0].name}</h3>
          </div>
          <div>
            {
              this.state.nameChange &&
              <div>
                <img src="/images/arrow-right.png" className="right_arrow_img"></img>
                <EditPageName nameChange={this.onNameChangeClose} name={this.props.detail[0].name}/>
              </div>
            }
          </div>
        </div>
        <div className="edit_blogs_list">
          <PageSubHeader hideAddBtn='true'/>
          <MyBlogs />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
});

const mapStatetoProps = (state, props) => {
  return {
    auth: state.auth,
    detail: selectDetails(state.detail)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(EditProfilePage);
