import React from 'react';
import { Link } from 'react-router-dom';



const Results = (props) => {
  

  return (
    <div className="results-container">
      <ul>
        {
          props.gameResults.map(game => (
            <li key={game.id}>

              <Link to={{
                pathname: `/games/${game.name}`,
                gameProps: {
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
// import { useNavigate } from "react-router-dom";
// import { Meats } from "../chronic/Meats";
// import { useContext } from "react";
// import { getGameDeets } from "../chronic/ApiCalla";
// import { formatConsoles } from "../chronic/Utilities";
// import Skeleton from "react-loading-skeleton";

// export default function Game({ data }){
//   const navigate = useNavigate();
//   const { setGameDeets } = useContext(Meats);

//   async function onClick() {
//     try {
//       const res = await getGameDeets(data.id);
//       setGameDeets(res.data);
//       navigate("/game" + res.data.id);
//     }catch{
//       navigate("/")
//     }
//   }

//   return(
//     <div className="results-container" onClick={onClick}>
//       {data ? (
//         <>
//           <div className='card'>
//               <h6>{data.name}</h6>
//               {/* Need to add styling for consoles */}
//               <small>{formatConsoles(data.platforms)}</small>
//               <div className='card'>
//                 <img src={data.background_image} alt="game" />
//               </div>
//           </div>
//         </>
//       ):(
//         <Skeleton count={10}/>
//       )}
//     </div>
//   );
// }
