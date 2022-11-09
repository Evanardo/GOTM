import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
        <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="{closeNav()}">&times;</a>
        {/* <Link className="nav-link" to="/news">News</Link> */}
        <a href="/profile">You</a> 
        <a href="/contact">Call</a>
        <a href="/news">This</a>
        <a href="/about">A</a>
        <a href="/">Glitch?</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    //   <span onclick={openNav()}>open</span>
    //   function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    //   }
      
    //   /* Set the width of the side navigation to 0 */
    //   function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    //   }
    )
  }
}
