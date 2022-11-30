import React from 'react';
import Eastward from '../static/images/Eastward.avif';
import AoR from '../static/images/art_of_rally.avif';
import { Link } from 'react-router-dom';
import GameDetail from '../components/GameDetail';

export default function Landing() {
  
    return (
      <div className='landing-body'>
        <section>
          <h1>Welcome to Game of the Month Club</h1>

          <div className="hero-container">

            <h6 className="hero glitch layers" data-text="cult"><span>"Let's start a cult..."</span></h6>
          </div>
          <div className='checklist'>

              <div className="card-gotm">
                <div className="card-body">
                  <h6 className="card-text">Current Game of the Month</h6>
                  <div className='curLast-month'>
                  <h2 className="gotm-title" value='Eastward' onClick={GameDetail}>Eastward</h2>
                  {/* <Link to={`/games/${game.name}`}
                state= {{
                  game: game
                }}/> */}
                  
                  </div>
                </div>
                <img className="card-img-top" alt='' src={Eastward}/>
                <div className="card-body-footer">
                  <h2 className="btn-movement">Join the movement</h2>
                  {/* <h2 className='hero glitch layers' data-text="join">Join</h2>
                  <h2 className='hero glitch layers' data-text="add">Us</h2> */}
                  {/* <h2 className="btn">Passing</h2> */}
                  {/* <h2 className="btn-movement">Add to Collection</h2> */}
                </div>
              </div>

          </div>
          <div className='checklist'>
          <div className="card-gotm">
                <div className="card-body">
                  <h6 className="card-text">Previous Game of the Month</h6>
                  <div className='curLast-month'>
                  <h2 className="gotm-title">Art of Rally</h2>
                  </div>
                </div>
                <img className="card-img-top" alt='' src={AoR}/>
                <div className="card-body-footer">
                  
                </div>
              </div>
              </div>
        </section>
      </div>
    );
  };


