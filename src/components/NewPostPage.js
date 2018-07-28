import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost, startSetPost } from '../actions/post';
import selectPosts from '../selectors/posts';
import { firebase } from '../firebase/firebase';


export class NewPostPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    console.log(this.props.posts[this.props.posts.length -1 ].uid)
  }
  onSubmit = (post) => {
    this.props.startAddPost(post);
  };

  render() {
    return (
      <div className="content-container">
        <h1>Add Post</h1>
        <PostForm
          onSubmit = {this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post)),
  startSetPost: (id) => dispatch(startSetPost(id)),
});

const mapStatetoProps = (state, props) => {
  return {
    posts: selectPosts(state.post)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(NewPostPage);
