import React from 'react';
import { Link } from 'react-router-dom';
import GameDetail from './GameDetail';

const Results = (props) => {
  

  return (
    <div className="results-container">
      <ul>
        {
          props.gameResults.map(game => (
            <li key={game.id}>

              <Link to={{
                pathname: `/games/${game.name}`,
                gamesProps: {
                  game: game
                }
              }}>
                <div className='card'>
                  <h6>{game.name}</h6>
                  <div className='card'>
                    <img src={game.background_image} alt="game" />
                  </div>
                </div>
              </Link>

            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Results;