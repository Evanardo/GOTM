import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {

  return (
    <div>
      <section>
        <h1>Games</h1>
        <ul>
          { props.gameRusults.map(game => (
            <li key={game.id}>
              <Link to={{
                pathname: `/game/${game.name}`,
                gameProps:{
                  game: game
                }
              }}>
                <h3>{game.name}</h3>
                <img src={game.background_image} alt="game"/>
              </Link>
            </li>
          ))
        }
        </ul>
      </section>
    </div>
  )

}


export default Results;