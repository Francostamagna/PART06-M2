import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <img src={Logo} alt= "logo henry"/>
      <h2>Henry - Weather app</h2>
      <SearchBar onSearch = {onSearch}/>
    </div>
  );
};

export default Nav;
