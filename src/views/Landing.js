import React from 'react';
import Eastward from '../static/images/Eastward.avif';
import AoR from '../static/images/art_of_rally.avif';
import AlanWake from '../static/images/AlanWake.jpeg';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import GameDetail from '../components/GameDetail';

export default function Landing(props) {
  const { isAuthenticated } = useAuth0();
  // const game = props.game;
  
    return (
      <div className='landing-body'>
        <section>
          <h1>Welcome to Game of the Month Club</h1>

          <div className="hero-container">

            <h6 className="hero glitch layers" data-text="CULT"><span>"Let's start a movement..."</span></h6>
          </div>
          <div className='checklist'>
{/* previous classnames=card-gotm & card-img-top */}
              <div className="card">
                <div className="card-body">
                  <h6 className="card-text">Current Game of the Month</h6>
                  <div className='curLast-month'>
                    
                    <h1 className="gotm-title">Eastward</h1>
                    {/* <Link className="gotm-title" to={`/games/${game.name}`} state= {{game: game}}>Eastward</Link> */}
                              
                  </div>
                </div>
                <img className="card" alt='' src={Eastward}/>
                <div className="card-body-footer">
                  
                  {isAuthenticated ? (
                    <>
                      <Link to={'/chat'} className="btn-movement">Join the movement&nbsp;</Link>
                      {/* <Link to='/collection' className="btn-movement">| Add to Collection</Link> */}
                      {/* <Link to='/profile' className="btn-movement">| playing it</Link> */}
                    </>
                  ) : (
                    <></>
                  )}
                  {/* <h2 className='hero glitch layers' data-text="join">Join</h2>
                  <h2 className='hero glitch layers' data-text="add">Us</h2> */}
                  {/* <h2 className="btn">Passing</h2> */}
                  {/* <h2 className="btn-movement">Add to Collection</h2> */}
                </div>
              </div>

          </div>
          <div className='checklist'>
          <div className="card">
                <div className="card-body">
                  <h6 className="card-text">Previous Game of the Month</h6>
                  <div className='curLast-month'>
                  <h2 className="gotm-title">Art of Rally</h2>
                  </div>
                </div>
                <img className="card" alt='' src={AoR}/>
                <div className="card-body-footer">
                {/* {isAuthenticated ? (
                    <>
                      <Link to='/collection' className="btn-movement">Add to Collection</Link>
                    </>
                  ) : (
                    <></>
                  )} */}
                </div>
              </div>
              </div>
        </section>
      </div>
    );
  };