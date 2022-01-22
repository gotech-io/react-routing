import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './About';
import NestedOne from './NestedOne';
import NestedTwo from './NestedTwo';
import Params from './Params';
import WithState from './WithState';
import Home from './Home';
import NotFound from './NotFound';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="nested-one" element={<NestedOne />}>
            <Route path="nested-two" element={<NestedTwo />} />
          </Route>
          {/* Dynamic route */}
          <Route path="params/:id" element={<Params />} />
          <Route path="with-state" element={<WithState />} />
          {/* Only match parents '/' route */}
          <Route index element={<Home />} />
          {/* 404 Handling */}
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Outside of our nested routing */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route
          path="/about"
          element={<h2>But how about a second routes?</h2>}
        />
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
