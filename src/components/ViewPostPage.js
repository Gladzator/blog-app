import React from 'react';
import { connect } from 'react-redux';
import { startSetPost } from '../actions/post';
import { firebase } from '../firebase/firebase';

export class ViewPostPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(<img  src="./images/liked.png"></img>)
  }
  render() {
    return (
      <div className="content-container">
        <div className="view-page__title">
            <h1>{this.props.posts.title}</h1>
        </div>
        <div className="view-page__content">
          <h3>{this.props.posts.content}</h3>
        </div>
          <img src="./images/liked.png"></img>

      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  startSetPost: (id) => dispatch(startSetPost(id)),
});

const mapStatetoProps = (state, props) => {
  return {
    posts: state.post.find((posts) => posts.id === props.match.params.id)
  };
};

export default connect(mapStatetoProps)(ViewPostPage);
