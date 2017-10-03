import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <ul>
      <li><Link to='/'>Biography</Link></li>
      <li><Link to='/Publications'>Publications</Link></li>
      <li><Link to='/CV'>CV</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
    </ul>
  </div>
)

export default Header
