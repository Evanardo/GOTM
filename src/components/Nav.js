import { useAuth0, User } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogOutButton';


function NavBar() {

  const { isAuthenticated } = useAuth0();


  // render() {
  return (
    <div id="mySidenav" className="sidenav">
      <h6 type="image" className='icon'>GOTM</h6>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About Us</Link>
      <div className='reg-footer'>
        {!isAuthenticated ? (

          <LoginButton />

        ) : (
          <>

            <div>

              <LogoutButton />
            </div>

          </>
        )}
      </div>

    </div>

  )
}
export default NavBar;
// }