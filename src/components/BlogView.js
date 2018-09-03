import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem'
import selectPosts from '../selectors/posts';

export class BlogView extends React.Component {
  constructor(props) {
    super(props);
  }

   render () {
     return (
       <div className="content-container">
         <div className="list-body">
         {
           this.props.posts.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No blogs</span>
            </div>
            ) : (
            this.props.posts.map((post) => {
              return <PostListItem key={post.id} {...post}/>;
            })
          )
        }
        </div>
       </div>
     );
   }
}

const mapStatetoProps = (state) => {
  return {
    posts: selectPosts(state.post, state.filters)
  };
};
export default connect(mapStatetoProps)(BlogView);
