import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogOutButton';
import { FaCross } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';



function NavBar() {
  // const user = useSelector(selectUser);
  const { isAuthenticated } = useAuth0();



  return (
    <div id="mySidenav" className="sidenav">
      <Link to="/"><h6 type="image" className='icon'>GO<FaCross className="hero glitch layers" id='goTm-icon'/>M</h6></Link>
      {/* <Link to="/">Home</Link> */}     
      {!isAuthenticated ? (
        <></>
        ) : (
          <>            
             <Link to="/profile">Profile</Link>
          </>
        )}
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/games">Search Games</Link>
      <div className='reg-footer'>
        {!isAuthenticated ? (
          <LoginButton />
        ) : (
          <>            
              <LogoutButton />            
          </>
        )}
      </div>

    </div>

  )
}
export default NavBar;
