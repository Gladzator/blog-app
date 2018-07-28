import React from 'react';
import BlogView from './BlogView';
import NameModal from './NameModal';
import PageSubHeader from './PageSubHeader';

const DashboardPage = () => (
  <div>
    <NameModal />
    <PageSubHeader />
    <BlogView />
  </div>

);

export default DashboardPage;
