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
// import { useState } from "react";
// import { fetchSearch } from "../components/Search";
// import { useDispatch } from "react-redux";

// const Search = () => {
//   const dispatch = useDispatch();
//   const [inputText, setInputText] = useState('');

//   const inputHandler = (e) => {
//     setInputText(e.target.value);
//   };

//   const submitSearch = (e) => {
//     e.preventDefault();
//     dispatch(fetchSearch(inputText));
//     setInputText('');
//   };

//   const wipeSearch = () => {
//     dispatch({ type: 'WIPE_SEARCHED'});
//   };

//   return(
//     <div>
//       <section>
//         <h1>Games</h1>
//         <div className='checklist'>
//           <form className='search' onClick={wipeSearch}>
//             <input
//               onChange={inputHandler}
//               value={inputText}
//               placeholder='Search Games'
//               className='form-control'
//               type='text' />
//             <div className='search-btn'>
//               <button
//                 className='btn'
//                 onClick={submitSearch} 
//                 type='submit'>
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className='game-results'>
//           {/* <Results gameResults={gameResults} /> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Search;

