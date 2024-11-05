import React from 'react';
import HomePage from './HomePage';
import InfoBoxesPage from './InfoBoxesPage';
import GetInTouchPage from './GetInTouchPage';

const CombinedPage = () => {
  return (
    <div>
      <HomePage />
      <InfoBoxesPage />
      <GetInTouchPage/>
    </div>
  );
};

export default CombinedPage;
