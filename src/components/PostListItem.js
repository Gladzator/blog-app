import React from 'react';
import { Link } from 'react-router-dom';

class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      content: props.content,
      likes: props.likes,
    };
    let like_image='not_liked';
  };

  render() {
    return(
      <Link to={`/view/${this.state.id}`}>
        <div className="list-header">
            <h3 className="list-item__title">{this.state.title}</h3>
            <div className="list-item__likes">
            {
              this.like_image==='not_liked'
              ?
              <img onClick={this.onLikeChange} src="./images/liked.png"></img>
              :
              <img onClick={this.onLikeChange} src="./images/not_liked.png"></img>
            }
              <p>{this.state.likes}</p>
            </div>
        </div>
        <div className="list-item">
          <h3 className="list-item__data list-item__sub-title">{this.state.content}</h3>
        </div>
      </Link>
    );
  }

  onLikeChange = () => {
    console.log('hi');
    if(this.state.likes === 0) {
      this.like_image= "not_liked"
      console.log(this.like_image);
      const likes = this.state.likes + 1;
      this.setState(() => ({ likes }))
    }
    if(this.state.likes === 1) {
      this.like_image= "liked"
      console.log(this.like_image);
      const likes = 0;
      this.setState(() => ({ likes }))
    }
  }
};

export default PostListItem;
