import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

//PageListFilters


export class PageSubHeader extends React.Component {
  render(){
    return (
      <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
              <input
                type="text"
                placeholder="Search posts"
                className="text-input"
              />
            </div>
            <div className="input-group__item">
              <select
                className="select"
              >
                <option value="title">Title</option>
                <option value="amount">Sub-Title</option>
              </select>
            </div>
            <Link className="input-group__item page_sub--button" to="/create"><img title="Add Post" src="/images/add_icon.png" /></Link>
        </div>
      </div>
    );
  }
};


export default PageSubHeader;
