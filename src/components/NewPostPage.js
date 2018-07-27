import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../actions/post';

export class NewPostPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(<img  src="./images/liked.png"></img>)
  }
  onSubmit = (post) => {
    this.props.startAddPost(post);
    this.props.history.push('/dashboard');
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
  startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(NewPostPage);
