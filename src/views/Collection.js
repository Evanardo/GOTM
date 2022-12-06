import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { GiCrucifix,GiSwitchblade, } from "react-icons/gi";


function Collection(props){
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();


  const toProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
      <section>

        <h1 className='title-collection'>Collect<GiSwitchblade className='witchBlade' size={30}/> on</h1>
        {isAuthenticated ? (
          <h2 className="card-title">{user.email}</h2>
        ) : (
          <h2 className='card-title'>You are not one of us...</h2>
        )}
        
        <p onClick={toProfile} className="btn">To Profile</p>


        <div className='card-o-profile'>
          <div className="collection" id='profiles'>          
            <div className="card-body">
              <h6 id='bio-h2'></h6>
              <div id='bio-box'>
                <p className="card-text" typeof='text'></p>
                <p className="card-text" typeof='text'></p>
              </div>

              <div className='card-body-links'>
                <Link to='/collection' className="btn"></Link>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Collection; 