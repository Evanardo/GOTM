import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../static/images/placeholder.jpg';
import AlanWake from '../static/images/AlanWake.jpeg';


export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className='profile'>
      <section id='dossier'>
        <h1>Dossier</h1>

        <div className='card-o-profile'>

          <div className="card" id='profiles'>
            {/* <div className='headshot'>
              <img className="card-img-top" alt='profile-img' src={placeholder} />
            </div> */}
            <div className="card-body">
              <h1>Welcome</h1>
              {isAuthenticated ? (
                <h2 className="card-title">{user.email}</h2>
              ) : (
                <h2 className='card-title'>You are not one of us...</h2>
              )}
              
              <h6 id='bio-h2'>Bio:</h6>
              <div id='bio-box'>
              <p className="card-text" typeof='text'>This could be all about you... but you've got commitment issues. Just log in already...</p>
              <p className="card-text" typeof='text'></p>
              </div>
            </div>


          </div>
          <div className='fit'>
            <div className="card" id='playing'>
              <div className="card-body">
                <h1 className="card-title">Currently Playing</h1>
                <h2 className='card-title'>Alan Wake</h2>
                <div id='currently-playing'>
                  <img className="card-img-top" alt='current' src={AlanWake} />
                </div>
              </div>

            </div>
            <div className='card' id='profile-links'>
              <div className="card-body">
                <a href="https://www.playstation.com/en-us/playstation-network/" target='_blank' rel="noreferrer" className="btn">Playstation</a>
                <a href="https://www.xbox.com/en-US/live/" target='_blank' rel="noreferrer" className="btn">Xbox</a>
                <a href="https://www.nintendo.com/" target='_blank' rel="noreferrer" className="btn">Nintendo</a>
                <a href="https://store.steampowered.com/" target='_blank' rel="noreferrer" className="btn">Steam</a>

              </div>
              <div className='card-body'>
                <a href="https://twitter.com/" target='_blank' rel="noreferrer" className="btn">Twitter</a>
                <a href="https://www.instagram.com/" target='_blank' rel="noreferrer" className="btn">Instagram</a>
                <a href="https://www.twitch.tv/" target='_blank' rel="noreferrer" className="btn">Twitch</a>

              </div>
              <div className='card-body'>
                <Link className="btn">Collection</Link>
                <Link className="btn">Wantlist</Link>
                <Link className="btn">Backlog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
