import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../static/images/placeholder.jpg'
// import { Card } from '@mui/material';
// import { ReactDOM } from 'react';

export default function Profile() {
  return (
    <div className='profile'>
      <section id='dossier'>
        <h1>Dossier</h1>

        <div className='card-o-profile'>

          <div className="card" id='profiles'>
            <div className='headshot'>
              <img className="card-img-top" alt='profile-img' src={placeholder} />
            </div>
            <div className="card-body">
              <h2 className="card-title">FirstName LastName</h2>
              <h2 id='bio-h2'>__Bio__</h2>
              <p className="card-text" typeof='text' id='bio-box'>This is all about you...</p>
            </div>

            <div className="card-body">
              <button className="btn">Twitter</button>
              <button className="btn">Instagram</button>
              <button className="btn">Twitch</button>
            </div>
          </div>
          <div className="card" id='playing'>
            <div className="card-body">
              <h1 className="card-title">Currently Playing</h1>
              <div id='currently-playing'>
                <img className="card-img-top" alt='current' src={placeholder} />
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
