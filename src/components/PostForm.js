import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post ? props.post.title : '',
      content: props.post ? props.post.content: '',
      likes: 0,
      error: ''
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };


  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.title || !this.state.content) {
      this.setState(() => ({ error: 'Please provide title and content.'}));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        title: this.state.title,
        content: this.state.content,
        likes: this.state.likes
      });
    }
  };

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
            type="text"
            placeholder="Title"
            className="text-input"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea
            placeholder="Content"
            className="textarea"
            value={this.state.content}
            onChange={this.onContentChange}
          />
          <button className="button add-edit-btn">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default PostForm;
