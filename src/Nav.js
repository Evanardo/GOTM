import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
        <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="{closeNav()}">&times;</a>
        <a href="#">You</a> 
        <a href="#">Call</a>
        <a href="#">This</a>
        <a href="#">A</a>
        <a href="#">Glitch?</a>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
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
