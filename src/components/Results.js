import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';



const Results = (props) => {
  

  return (
    <div className="results-container">
      <ul>
        {
          props.gameResults.map(game => (
            <li key={game.id}>

              <Link to={`/games/${game.name}`}
                state= {{
                  game: game
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



// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { loadDeets } from "./Search";


// export const Game = ({ name, released, image, id }) => {
//   const dispatch = useDispatch();

//   const deetsHandler = () => {
//     dispatch(loadDeets(id));
//   };

//   const stringId = id.toString();

//   return(
//     <div className="results-container" layoutId={stringId} onClick={deetsHandler}>
//         <Link to={`/games/${id}`}>

//           <div className='card'>
//             <h6 layoutId={`title ${stringId}`}>{name}</h6>
//             <p>{released}</p>
//             <div className='card'>
//               <img layoutId={`image ${stringId}`} src={image} alt={name} />
//             </div>
//           </div>
//         </Link>
//     </div>
//   );
// };

