import React, { Component } from 'react'

export default function About() {

  return (
    <section>
      <h1>The Effect</h1>
      <div className='aboutUs'>
        <p> </p>
        <p>
          Games have a short time in the spotlight.
          They reach their release date and for a few brief moments they are collectively played by the masses.
          What a glorious time this is. All fans of video games talking, texting, tweeting about the same game.
          These moments are what we aim to provide...
        </p>
        <p>We want to bring people together with Game of the Month Club.</p>
        <p>
          We strive to create a platform where forgotten and overlooked games are placed in the spotlight one more time.
          We believe that the rewards from participating in GOTM will not only be checking-off titles in your backlog,
          but also discovering new content and building a culture.
        </p>
        <p>We have great plans and we hope you all will pledge yourself to our little cult.</p>

      </div>
      <p id='signingOff'>Blessings to the Backlog,</p>

      <div className="hero-container">
        <div className="environment"></div>
        <h2 className="hero glitch layers" data-text="HELP"><span>THE GOTM TEAM</span></h2>
      </div>
    </section>
  );
};
