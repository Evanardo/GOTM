// import React, { useState } from 'react';
// import Results from '../views/Games';

// const Search = () => {
//     const [searchTerm, setSearchTerm] = useState("")
//     const [gameResults, setGameResults] = useState([])

//     const handleChange = e => {
//         setSearchTerm(e.target.value)
//     }

//     const onSubmit = e => {
//         e.preventDefault();
//         let slug = searchTerm.split(' ').join('-').toLowerCase()

//         setGameResults([])
//         fetch(`https://api.rawg.io/api/games/?key=12cea32be47149aab116aaf08793f3d3&search=${slug}`)
//         .then(res => res.json())
//         .then (({results}) => {
//             results === undefined ? alert("You're search didn't pull up anything. Please check your spelling.") : setGameResults(results)
//         })
//         setSearchTerm("")
//     }
//     return (
//         <div className='game-search'>
//             <h1>Game Search</h1>
//             <form onSubmit={onSubmit}>
//                 <input type="text" value={searchTerm} onChange={handleChange}/>
//                 <br></br>
//                 <button className='btn'>Search</button>
//             </form>
//             <Results gameResults={gameResults}/>
//         </div>
//     );
// };

// export default Search;