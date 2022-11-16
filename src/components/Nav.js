import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {

  // openNav=()=> {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.getElementById("main").style.marginLeft = "250px";
  // }

  // closeNav=()=> {
  //   document.getElementById("mySidenav").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  // }


  render() {
    return (
        <div id="mySidenav" class="sidenav">
        {/* <a href="javascript:void(0)" class="closebtn" onclick="{closeNav}">&times;</a> */}
        {/* <a className="nav-link" to="/news">News</a> */}
        <image type="image" src="../static/images/icons8-disc-64"className='icon'>GOTM</image>
        <a href="/">Home</a>
        <a href="/news">News</a>
        <a href="/profile">Profile</a> 
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
        <div className='reg-footer'>
          <a id='reg-login' href="/login">Login</a>
          <a id='reg-signup' href="/signup">Sign Up</a>
        </div>
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
