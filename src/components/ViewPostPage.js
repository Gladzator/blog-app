import React from 'react';
import { connect } from 'react-redux';
import { startSetPost, startEditPost } from '../actions/post';
import { startAddLike, startEditLikesKey } from '../actions/like';
import { firebase } from '../firebase/firebase';
import selectLike from '../selectors/like';

export class ViewPostPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      likeid: props.likes === undefined ? '' : props.likes.id,
      like: props.likes === undefined ?  0 : this.props.likes.likes,
      likes: props.posts.likes ? props.posts.likes : 0,
    };
  }


  render() {
    return (
      <div className="content-container">
        <div className="view-page__title">
            <h1>{this.props.posts.title}</h1>
        </div>
        <div>Share the blog: <u>https://blogist-by-yash.herokuapp.com/view/{this.props.posts.id}</u></div>
        <div className="view-page__content">
          <h3>{this.props.posts.content}</h3>
        </div>
        <div className="list-item__likes">
        {
          (this.state.like === 1)
          ?
          firebase.auth().currentUser && <img onClick={this.onLikeChange} src="/images/liked.png"></img>
          :
          firebase.auth().currentUser && <img onClick={this.onLikeChange} src="/images/not_liked.png"></img>
        }
        </div>

      </div>
    );
  }


  onLikeChange = () => {
    console.log(this.props);
    const id=this.props.posts.id;
    if(this.state.likeid === '') {
      const likeid = this.props.posts.id;
      const likes = this.props.posts.likes + 1;

      const like = 1
      this.setState(() => ({ likeid,like,likes }));

      this.props.startAddLike(this.props.posts.id, {likes:1});
      this.props.startEditPost(this.props.posts.uid,this.props.posts.id, likes, this.props.posts)


    }else if(firebase.auth().currentUser.uid  === this.props.posts.uid){
      if(this.state.like === 0) {
          const likes = this.props.posts.likes + 1;

          const like = 1;
          this.setState(() => ({ like,likes }));

          this.props.startEditLikesKey(this.props.posts.id,{likes:1})
          this.props.startEditPost(this.props.posts.uid,this.props.posts.id, likes, this.props.posts)

        } else {
          const likes = this.props.posts.likes - 1;

          const like = 0;
          this.setState(() => ({ like,likes }));

          this.props.startEditLikesKey(this.props.posts.id,{likes:0})
          this.props.startEditPost(this.props.posts.uid,this.props.posts.id, likes, this.props.posts)

        }
      } else {
        if(this.state.like === 0) {
          const likes = this.props.posts.likes + 1;

          const like = 1;
          this.setState(() => ({ like,likes }));

          this.props.startEditLikesKey(this.props.posts.id,{likes:1})
          this.props.startEditPost(this.props.posts.uid,this.props.posts.id, likes, this.props.posts)

        } else {
          const likes = this.props.posts.likes - 1;

          const like = 0;
          this.setState(() => ({ like,likes }));
          this.props.posts.likes = this.props.posts.likes - 1;

          this.props.startEditLikesKey(this.props.posts.id,{likes:0})
          this.props.startEditPost(this.props.posts.uid,this.props.posts.id, likes, this.props.posts)

        }
      }
    };
};




const mapDispatchToProps = (dispatch) => ({
  startEditPost: (uid,id, likes, posts) => dispatch(startEditPost(uid,id, likes, posts)),
  startAddLike: (id,likedPost) => dispatch(startAddLike(id,likedPost)),
  startEditLikesKey: (id,likedPost) => dispatch(startEditLikesKey(id,likedPost)),
});

const mapStatetoProps = (state, props) => {
  return {
    posts: state.post.find((posts) => posts.id === props.match.params.id),
    likes: state.like.find((likes) => likes.id === props.match.params.id)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ViewPostPage);
