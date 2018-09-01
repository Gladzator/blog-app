import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import database from '../firebase/firebase';

class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      content: props.content,
      likes: props.likes,
      uid: props.uid
    };
  };



  getName = () => {
    let uName;
    this.props.uid_name.filter((name) => {
      if(name.id === this.state.uid) {
        uName= name.name;
      };
    });
    return uName;
  };
  onLiked = (post) => {
    post.likes = post.likes + 1;
  }

  render() {
    return(
      <Link to={`/view/${this.state.id}`}>
        <div className="list-header">
            <h3 className="list-item__title">{this.state.title}</h3>
            <div className="list-item__likes">
            {
                this.state.likes !== 0
              ?
              <img src="./images/liked.png"></img>
              :
              <img src="./images/not_liked.png"></img>
            }
              <p>{this.state.likes}({this.getName()})</p>
            </div>
        </div>
        <div className="list-item">
          <h3 className="list-item__data list-item__sub-title">{this.state.content}</h3>
        </div>
      </Link>
    );
  }
};

const mapStatetoProps = (state) => {
  return {
    uid_name: state.allUid[0]
  };
};

export default connect(mapStatetoProps)(PostListItem);
