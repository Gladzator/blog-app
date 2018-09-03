import React from 'react';
import { connect } from 'react-redux';
import MyPostListItem from './MyPostListItem'
import selectPosts from '../selectors/posts';
import { firebase } from '../firebase/firebase';


export class MyBlogs extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

   render () {
     return (
      <div className="list-body">
         {
           this.props.posts.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No blogs</span>
            </div>
            ) : (
            this.props.posts.map((post) => {
              if(firebase.auth().currentUser.uid  === post.uid){
                return <MyPostListItem key={post.id} {...post}/>;
              }
            })
          )
        }
        </div>
     );
   }
}

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    posts: selectPosts(state.post, state.filters)
  };
};
export default connect(mapStatetoProps)(MyBlogs);
