import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Routes from './Routes';

function Shell() {
  return (
    <div>
      <main className="container">
        <Routes />
      </main>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Shell />
  </Router>,
  document.getElementById('root'),
);
