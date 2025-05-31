import React from 'react'
import './Header.css';
const Header = (props) => {
  return (
    <>
  <header>
    <a href='/home'>
  <div className="profile">
  <img src="/tree.png" alt="profile" />
  <span> Team Chautari </span>
  <i className="bx bx-caret-down"></i>
</div>
</a>

<ul className="nav">
  <li><a href="/home" className="home-active">Home</a></li>
  <li><a href="/categories"> Events</a></li>
  <li><a href="/product"> Merch</a></li>
  <li><a href="/about"> About</a></li>
  <li><a href="/customer"> Contact Us</a></li>
</ul>

<div className="profile">
  <img src="/ayush.jpg" alt="profile" />
  <span> HI !<tab></tab>{props.UserName} </span>
  <i className="bx bx-caret-down"></i>
</div>

  </header>
    </>
  )
}

export default Header
