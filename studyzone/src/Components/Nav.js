import React from 'react'
import NavButton from "./NavButton"
import NavIcons from './navIcons';
import NavSearch from './navSearch';
const Nav = () => {
  return (
    <nav className="navbar_">
      <div className="navbar__logo">
        <img src='../Images/logo-no-background.png'></img>
      </div>
      <NavSearch/>
 

    {/* <NavButton/> */}

    <NavIcons/>


    </nav>
  );
}

export default Nav
