import React from 'react';
import { useLocation } from 'react-router-dom';

const WithState = () => {
  const location = useLocation();

  return (
    <div className="WithState">
      <h2>WithState - {JSON.stringify(location.state, null, 2)}</h2>
    </div>
  );
};

export default WithState;
