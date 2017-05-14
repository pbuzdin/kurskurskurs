import React from 'react';
import './style.css';
import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

export default () => (
  <div className="sidebar">
    <Logo />
    <Search />
    <Nav />
  </div>
);
