import React from 'react';
import { connect } from 'react-redux';
import { startSetPost, startEditPost } from '../actions/post';
import { startAddLike, startEditLike, startEditLikesKey } from '../actions/like';
import { firebase } from '../firebase/firebase';
import selectLike from '../selectors/like';

export class ViewPostPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      likeid: props.likes === undefined ? '' : props.likes.id,
      like: props.likes === undefined ?  0 : props.likes.likes,
      likes: props.posts.likes ? props.posts.likes : 0,
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
          this.state.like !== 0
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

    const id=this.props.posts.id;
    if(this.state.likeid === '') {
      const likeid = this.props.posts.id;
      const likes = this.props.posts.likes + 1;

      this.state.like = 1;
      this.setState(() => ({ likes }))
      this.state.likeid = likeid;
      this.props.posts.likes = this.props.posts.likes + 1;

      this.props.startEditLike(this.props.posts.id, {likes:1});
      this.props.startEditPost(this.props.posts.uid, this.props.posts.id, this.props.posts)

      this.props.likes.likes = 1;

    }else if(firebase.auth().currentUser.uid  === this.props.posts.uid){
        if(this.state.like === 0) {
          const likes = this.props.posts.likes + 1;
          this.state.like = 1;
          this.setState(() => ({ likes }))
          this.props.posts.likes = this.props.posts.likes + 1;


          this.props.startEditLikesKey(this.props.posts.id,{likes:1})
          this.props.startEditPost(this.props.posts.uid, this.props.posts.id, this.props.posts)

          this.props.likes.likes = 1;
        } else {
          const likes = this.props.posts.likes - 1;
          this.state.like = 0;
          this.setState(() => ({ likes }));
          this.props.posts.likes = this.props.posts.likes - 1;

          this.props.startEditLikesKey(this.props.posts.id,{likes:0})
          this.props.startEditPost(this.props.posts.uid, this.props.posts.id, this.props.posts)

          this.props.likes.likes = 0;

        }
      } else {
        if(this.state.like === 0) {
          const likes = this.props.posts.likes + 1;
          this.state.like = 1;
          this.setState(() => ({ likes }))
          this.props.posts.likes = this.props.posts.likes + 1;

          this.props.startEditLikesKey(this.props.posts.id,{likes:1})
          this.props.startEditPost(this.props.posts.uid, this.props.posts.id, this.props.posts)

          this.props.likes.likes = 1;

        } else {
          const likes = this.props.posts.likes - 1;
          this.state.like = 0;
          this.setState(() => ({ likes }))
          this.props.posts.likes = this.props.posts.likes - 1;

          this.props.startEditLikesKey(this.props.posts.id,{likes:0})
          this.props.startEditPost(this.props.posts.uid, this.props.posts.id, this.props.posts)

          this.props.likes.likes = 0;
        }
      }
    };
};




const mapDispatchToProps = (dispatch) => ({
  startSetPost: (id) => dispatch(startSetPost(id)),
  startEditPost: (uid, id, posts) => dispatch(startEditPost(uid, id, posts)),
  startEditLike: (id,likedPost) => dispatch(startEditLike(id,likedPost)),
  startEditLikesKey: (id,likedPost) => dispatch(startEditLikesKey(id,likedPost)),
  startAddLike: (likedPost) => dispatch(startAddLike(likedPost)),

});

const mapStatetoProps = (state, props) => {
  console.log(state)
  return {
    posts: state.post.find((posts) => posts.id === props.match.params.id),
    likes: state.like.find((likes) => likes.id === props.match.params.id)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ViewPostPage);
