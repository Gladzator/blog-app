import React from 'react';
import { connect } from 'react-redux';
import BlogView from './BlogView';
import NameModal from './NameModal';
import PageSubHeader from './PageSubHeader';
import Picture from './Picture';

class DashboardPage extends React.Component    {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.details.length === 0 && <NameModal />}
        <PageSubHeader />
        <BlogView />
      </div>

    )
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.auth,
    details: state.detail,
    posts: state.post
  };
};

export default connect(mapStatetoProps)(DashboardPage);
