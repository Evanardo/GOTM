import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../static/images/placeholder.jpg';
import AlanWake from '../static/images/AlanWake.jpeg';
import { 
  SiNintendoswitch,
  SiPlaystation,
  SiSteam,
  SiXbox,
  SiTwitch,
  SiNintendo,
} from "react-icons/si";
import {
  SlSocialTwitter,
  SlSocialInstagram,
} from "react-icons/sl";


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
              
              {isAuthenticated ? (
                <>
                <h1>Hail</h1>
                <h2 className="card-title">{user.email}</h2>
                </>
              ) : (
                <>
                <h1>Halt</h1>
                <h2 className='card-title'>You are not one of us...</h2>
                </>
                
              )}
              
              <h2 id='bio-h2'>Bio:</h2>
              <div id='bio-box'>
              {isAuthenticated ? (
                    <>
                      <p className="card-bio" typeof='text'>What's there to say... I live to serve the backlog...</p>
                    </>
                  ) : (
                    <> 
                      <p className="card-bio" typeof='text'>This could be all about you... but you've got commitment issues. Just log in already...</p>
                    </>
                  )}
              
              <p className="card-text" typeof='text'></p>
              </div>
              <div className='card-body-links'>
              {isAuthenticated ? (
                <>
                <Link to='/collection' className="btn">Your Collection</Link>
                </>
              ):(
                <></>
              )}
              </div>
            </div>


          </div>
          <div className='fit'>
            <div className="card" id='playing'>
              <div className="card-body">
                <h1 className="card-title">Currently Playing</h1>
                {isAuthenticated ? (
                  <>
                  <h2 className='card-title'>Alan Wake</h2>
                  </>
                ):(
                  <></>
                )}
                {/* previous id='currently-playing' */}
                <div className='card'>
                
                  {isAuthenticated ? (
                    <>
                    <img className="card-img-top" alt='current' src={AlanWake} />
                    </>
                  ) : (
                    <> 
                    <img className="card-img-top" alt='current' src={placeholder} />                   
                    </>
                  )}
                </div>
              </div>

            </div>
            <div className='card' id='profile-links'>
              <div className="card-body">
                <a href="https://www.playstation.com/en-us/playstation-network/" target='_blank' rel="noreferrer" className="btn"><SiPlaystation/>&nbsp;Playstation</a>
                <a href="https://www.xbox.com/en-US/live/" target='_blank' rel="noreferrer" className="btn"><SiXbox/>&nbsp;Xbox</a>
                <a href="https://www.nintendo.com/" target='_blank' rel="noreferrer" className="btn"><SiNintendo/>&nbsp;Nintendo</a>
                <a href="https://store.steampowered.com/" target='_blank' rel="noreferrer" className="btn"><SiSteam/>&nbsp;Steam</a>

              </div>
              <div className='card-body'>
                <a href="https://twitter.com/" target='_blank' rel="noreferrer" className="btn"><SlSocialTwitter/>&nbsp;Twitter</a>
                <a href="https://www.instagram.com/" target='_blank' rel="noreferrer" className="btn"><SlSocialInstagram/>&nbsp;Instagram</a>
                <h6 className='btn'><a href="https://www.twitch.tv/" target='_blank' rel="noreferrer" className="hero glitch layers" data-text="witch"><SiTwitch/>&nbsp;Twitch</a></h6>

              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
