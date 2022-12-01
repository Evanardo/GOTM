import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../static/images/placeholder.jpg'


export default function Profile() {
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
              <h2 className="card-title">FirstName LastName</h2>
              <h2 id='bio-h2'>__Bio__</h2>
              <p className="card-text" typeof='text' id='bio-box'>This is all about you...</p>
            </div>


          </div>
          <div className='fit'>
            <div className="card" id='playing'>
              <div className="card-body">
                <h1 className="card-title">Currently Playing</h1>
                <div id='currently-playing'>
                  <img className="card-img-top" alt='current' src={placeholder} />
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
                <button className="btn">Collection</button>
                <button className="btn">Wantlist</button>
                <button className="btn">Backlog</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
