//extras

import React from 'react';
import {storage} from '../firebase/firebase'

class Picture extends React.Component {
  constructor(props){
    super(props);
    this.ImageRef();
  }

  ImageRef =() => {
    storage.child(`profile/${this.props.auth.uid}`).getDownloadURL().then(function(url) {
      console.log(url);
      const img = document.getElementById('myimg');
      img.src = url;
    }).catch(function(error) {
      console.log(error)
      switch (error.code) {
            default:
              const img = document.getElementById('myimg');
              img.src="/images/user.png"
        }
    });
  }
  render() {
    return(
        <div>
          <div className="button_input_img">
            <input
              type='file'
              className="input_img"
            />
            <img className="profile_img" id="myimg" alt="DP" onclick="openfileDialog()"></img>
          </div>

        </div>
    )
  }

}
export default Picture;
