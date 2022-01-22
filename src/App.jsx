import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import ActiveLink from './ActiveLink';

import './App.css';

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>App Wrapper</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <ActiveLink to="/nested-one">NestedOne</ActiveLink>
      <Link to="/nested-one/nested-two">NestedTwo</Link>
      <Link to="/params/1">Param 1</Link>
      <Link to="/params/2">Param 2</Link>
      <Link to="/with-state" state={{ title: 'Look at me, I have state' }}>
        With State
      </Link>
      <Link to="/about">About</Link>
      <Outlet />
    </div>
  );
};

export default App;
