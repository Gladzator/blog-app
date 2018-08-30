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
    };
  };

  getName = () => {
    database.ref(`users/${this.props.uid}/details`).once('value').then((snapshot) => {
      let name;
      snapshot.forEach(childSnapshot => {
        childSnapshot.forEach(childSnapshot2 => {
          if(childSnapshot2.key==='name') {
              name=childSnapshot2.val()
          }
          console.log(name)
        });
        return name;
      })
    });
  }

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

export default (PostListItem);
