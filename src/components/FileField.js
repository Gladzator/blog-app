import React from 'react';
import { connect } from 'react-redux';
import Picture from './Picture';
import { startAddDetail } from '../actions/detail';

class FileField extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      picture: null,
      pictureUrl: null
    }
  }
  render() {
    const { input, name } = this.props
    return (
      <div>
        <input
          type="file"
          {...input}
          onChange={(event) => {
            this.displayPicture(event);
          }}
        />
      </div>

    );
  }

  displayPicture(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        picture: file,
        pictureUrl: reader.result
      })
      const pictureUrl = this.state.pictureUrl
      this.props.startAddDetail({name: '', picture: file})
    };
    reader.readAsDataURL(file);
  }
}
const mapDispatchToProps = (dispatch) => ({
  startAddDetail: (detail) => dispatch(startAddDetail(detail))
});

export default connect(undefined, mapDispatchToProps)(FileField);
