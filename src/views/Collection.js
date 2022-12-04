import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {Link} from 'react-router-dom';


function Collection() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <section>

        <h1>Collection</h1>

        <div className='card-o-profile'>

          <div className="collection" id='profiles'>

            <div className="card-body">
              {isAuthenticated ? (
                <h2 className="card-title">{user.email}</h2>
              ) : (
                <h2 className='card-title'>You are not one of us...</h2>
              )}

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