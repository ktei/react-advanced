import React from 'react';
import { Link } from 'react-router-dom';

export default function CatalogView() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/spread-attributes">Spread attributes</Link>
        </li>
        <li>
          <Link to="/functions-as-children">Functions as children</Link>
        </li>
        <li>
          <Link to="/using-refs">Using refs</Link>
        </li>
        <li>
          <Link to="/googlemap">GoogleMaps integration</Link>
        </li>
        <li>
          <Link to="/fragment">Fragment</Link>
        </li>
        <li>
          <Link to="/portal">Portal</Link>
        </li>
        <li>
          <Link to="/hoc">HOC</Link>
        </li>
      </ul>
    </div>
  );
}
