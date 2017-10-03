import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h3>Amaya Perez-Brumer</h3>
    <ul className="navBar">
      <li><Link className="navItem" to='/'>Biography</Link></li>
      <li><Link className="navItem" to='/Publications'>Publications</Link></li>
      <li><Link className="navItem" to='/CV'>CV</Link></li>
      <li><Link className="navItem" to='/Contact'>Contact</Link></li>
    </ul>
  </div>
)

export default Header
