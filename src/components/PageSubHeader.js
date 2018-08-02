import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { setTextFilter, searchByTitle, searchByContent, sortByLike } from '../actions/filters'
import selectPosts from '../selectors/posts';

//PageListFilters

export class PageSubHeader extends React.Component {

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'Title') {
      this.props.searchByTitle();
    } else if (e.target.value === 'Content') {
      this.props.searchByContent();
    } else if (e.target.value === 'Likes') {
      this.props.sortByLike();
    }
  };

  render(){
    return (
      <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
              <input
                type="text"
                placeholder="Search posts"
                className="text-input"
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
            </div>
            <div className="input-group__item">
              <select
                className="select"
                value = {this.props.filters.sortBy}
                onChange={this.onSortChange}
              >
                <option value="Title">Title</option>
                <option value="Content">Content</option>
                <option value="Likes">Likes</option>
              </select>
            </div>
            <Link className="input-group__item page_sub--button" to="/create"><img title="Add Post" src="/images/add_icon.png" /></Link>
        </div>
      </div>
    );
  }
};

const mapStatetoProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  searchByTitle: () => dispatch(searchByTitle()),
  searchByContent: () => dispatch(searchByContent()),
  sortByLike: () => dispatch(sortByLike())
});

export default connect(mapStatetoProps, mapDispatchToProps)(PageSubHeader);
