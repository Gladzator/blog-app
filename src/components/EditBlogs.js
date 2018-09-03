import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import RemoveModal from './RemoveModal';
import { startEditPost, startRemovePost } from '../actions/post';
import { startRemoveLike } from '../actions/like';


export class EditBlogs extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
     selectedOption: undefined
   };
   onSubmit = (post) => {
      this.props.startEditPost(this.props.post.uid,this.props.post.id,this.props.post.likes, post);
      setTimeout(() => {
        this.props.history.push(`/profile/${this.props.post.uid}`);
      }, 1000)
  };
  onRemove = () => {
    this.setState(() => ({
      selectedOption: this.props.post.id
    }));
  };
  removeBlog = (expense) => {
    this.props.startRemovePost({id: this.props.post.id});
    this.props.allUid.map((uid) => {
      this.props.startRemoveLike(uid.id, this.props.post.id);
    });
    this.props.history.push('/');
  };
  closeModal = () => {
        this.setState(() => ({
          selectedOption: undefined
       }));
   };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Blogs</h1>
          </div>
        </div>
        <div className="content-container">
          <PostForm
            post = {this.props.post}
            onSubmit={this.onSubmit}
            buttonText="Save Blog"
          />
          <RemoveModal
            selectedOption={this.state.selectedOption}
            removeBlog={this.removeBlog}
            closeModal={this.closeModal}
          />
          <button className="button button--secondary add-edit-btn" onClick={ this.onRemove }
            >Remove Blog</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditPost: (uid,id, likes, post) => dispatch(startEditPost(uid,id, likes, post)),
  startRemovePost: (post) => dispatch(startRemovePost(post)),
  startRemoveLike: (uid, id) => dispatch(startRemoveLike(uid, id)),
});

const mapStatetoProps = (state, props) => {
  return {
    post: state.post.find((post) => post.id === props.match.params.id),
    allUid: state.allUid
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(EditBlogs);
