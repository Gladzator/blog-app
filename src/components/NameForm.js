import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.detail ? props.detail.name : '',
      error: ''
    };
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.name) {
      this.setState(() => ({ error: 'Please provide name.'}));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        name: this.state.name
      });
    }
  };

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
            type="text"
            placeholder="Enter your name..."
            className="text-input"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <button
            className="button"
            type="submit"
            >
            Confirm
          </button>
      </form>
    )
  }
}

export default NameForm;
