import React from 'react';
import { Outlet } from 'react-router-dom';

const NestedOne = () => {
  return (
    <div className="NestedOne">
      <h2>NestedOne</h2>
      <Outlet />
    </div>
  );
};

export default NestedOne;
