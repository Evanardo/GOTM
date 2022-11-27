import React from 'react';
import { useState } from 'react';
import Results from '../components/Results';



export const Games = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    let slug = searchTerm.split(' ').join('-').toLowerCase()
    const apiKey = process.env.REACT_APP_API_KEY

    setGameResults([])
    
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${slug}`)
      .then(res => res.json())
      .then(({ results }) => setGameResults(results))
    setSearchTerm("")
  }



  return (
    <div>
      <section>
        <h1>Games</h1>
        <div className='checklist'>
          <form className='search' onSubmit={onSubmit}>
            <input
              onChange={handleChange}
              value={searchTerm} 
              placeholder='Search Games'
              className='form-control'
              type='text' />
            <div className='search-btn'>
              <button
                className='btn'
                // onClick={submitSearch} 
                type='submit'>
                Search
              </button>
            </div>
          </form>
        </div>
        <div className='game-results'>
        <Results gameResults={gameResults} />
        </div>
      </section>
    </div>
  )

}


export default Games;
// import { useEffect, useState } from "react";
// import { getDefaultGames, getSearchedGames } from "../chronic/ApiCalla";
// import Game from "../components/Results";
// import { useLocalStorage } from "react-use";
// import { useSelector, useDispatch } from "react-redux";
// import { useMutation } from "react-query";



// export default function Games(){
//   // const games = useSelector(selectGames);
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [storedQuery, setStoredQuery] = useLocalStorage("query");
//   const [isLoading, setIsLoading] = useState(false);

//   const{
    
//     mutate: fetchSearchedGames,
//   } = useMutation(getDefaultGames,{
//     refetchOnWindowFocus: false,
//     onSettled: () => setIsLoading(false),
//     onSuccess: (res) =>{
//       dispatch(updateGames(res.data.results));
//       // setShowDefault(true);
//       setSearchTerm("");
//       setStoredQuery("");
//     },
//     onMutate: () => setIsLoading(true),
//   });

//   const { mutate: fetchSearchedGames} = useMutation((searchTerm)=> getSearchedGames(searchTerm),{
//     refetchOnWindowFocus: false,
//     // onSettled: () => setIsSearchLoading(false),
//     onSuccess: (res) => {
//       dispatch(updateGames(filterGames(res.data.results)));
//       // calcAvScore(res.data.results);
//       // setShowDefault(false);
//     },
//   });

//   // async function loadData(){
//   //   if (storedQuery){
//   //     setSearchTerm(storedQuery);
//   //     fetchGamesByName(storedQuery);
//   //   } else{
//   //     fetchDefaultGames();
//   //   }
//   // }

//   async function search(e){
//     e.preventDefault();
//     // setStoredQuery(searchTerm);
//     // dispatch(deleteGames());

//     // if (!searchTerm){
//     //   fetchDefaultGames();

//     //   return;
//     // }

//     // setIsSearchLoading(true);
//     fetchSearchedGames(searchTerm);
//   }

//   useEffect(() => { loadData();}, []);

//   // function calcAvScore(gameList){
//   //   if (!gameList.length){
//   //     return;
//   //   }
    
//   //   const gameScored = gameList.filter((game) => game.metacritic);

//   //   let score = 0;
//   //   gameScored.forEach((game) => { score += game.metacritic || 0;});

//   //   const avg = score/ gameScored.length || 0;
//   //   setAvScore(avg.toFixed(0));
//   // }
//   function onInputChange(e){
//     setSearchTerm(e.target.value);
//   }
  
//     return(
//       <div>
//         <section>
//           <h1>Games</h1>
//           <div className='checklist'>
//             <form className='search' onSubmit={search}>
//               <input
//                 onInputChange={onInputChange}
//                 onChange={onInputChange}
//                 value={searchTerm} 
//                 placeholder='Search Games'
//                 className='form-control'
//                 type='text' />
//               {/* <div className='search-btn'> 
//                 <button
//                   className='btn'
//                   // onClick={submitSearch} 
//                   type='submit'>
//                   Search
//                 </button>
//               </div>*/}
//             </form>
//           </div>
//           <div className='game-results'>
//           <Game key={game.slug} />
//           {(isLoading) && (
//             <>
//               <Game isLoading/>
//               <Game isLoading/>
//               <Game isLoading/>
//             </>
//           )}
//           </div>
//         </section>
//       </div>
//     );
// }

