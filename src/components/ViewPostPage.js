import React from 'react';
import { connect } from 'react-redux';
import { startSetPost, startEditPost } from '../actions/post';
import { firebase } from '../firebase/firebase';


export class ViewPostPage extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      likes: props.posts.likes,
    };
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
        <div className="list-item__likes">
        {
          this.props.posts.likes===1
          ?
          <img onClick={this.onLikeChange} src="/images/liked.png"></img>
          :
          <img onClick={this.onLikeChange} src="/images/not_liked.png"></img>
        }
          </div>

      </div>
    );
  }

  testUser = () => {
    return (firebase.auth().currentUser.uid  === this.props.posts.uid)
  }

  onLikeChange = () => {
    if(firebase.auth().currentUser.uid  === this.props.posts.uid){
      if(this.state.likes === 0) {
        const likes = this.state.likes + 1;
        this.setState(() => ({ likes }))

        this.props.posts.likes = 1;
        this.props.startEditPost(this.props.posts.id,   this.props.posts)
      }
      if(this.state.likes === 1) {
        const likes = 0;
        this.setState(() => ({ likes }))

        this.props.posts.likes = 0;
        this.props.startEditPost(this.props.posts.id,   this.props.posts)
      }
    } else {
      if(this.state.likes === 0) {
        const likes = this.state.likes + 1;
        this.setState(() => ({ likes }))

        this.props.posts.likes = this.props.posts.likes + 1;
        this.props.startEditPost(this.props.posts.id,   this.props.posts)
      }
      if(this.state.likes === 1) {
        const likes = 0;
        this.setState(() => ({ likes }))

        this.props.posts.likes = 0;
        this.props.startEditPost(this.props.posts.id,   this.props.posts)
      }

    }
  };
};




const mapDispatchToProps = (dispatch) => ({
  startSetPost: (id) => dispatch(startSetPost(id)),
  startEditPost: (id, posts) => dispatch(startEditPost(id, posts))
});

const mapStatetoProps = (state, props) => {
  return {
    posts: state.post.find((posts) => posts.id === props.match.params.id)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ViewPostPage);
