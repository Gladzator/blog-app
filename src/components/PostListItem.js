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
  };

  render() {
    return(
      <Link to={`/view/${this.state.id}`}>
        <div className="list-header">
            <h3 className="list-item__title">{this.state.title}</h3>
            <div className="list-item__likes">
            {
                this.state.likes===1
              ?
              <img src="./images/liked.png"></img>
              :
              <img src="./images/not_liked.png"></img>
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

};

export default PostListItem;
