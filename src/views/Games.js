import React from 'react';
import { useState } from 'react';
import Results from '../components/Results';
// import { useDispatch } from 'react-redux';


export const Games = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    
    fetch(`https://api.rawg.io/api/games?key=12cea32be47149aab116aaf08793f3d3&search=${slug}`)
      .then(res => res.json())
      .then(({ results }) => {
        results === undefined ? alert("You're search didn't pull up anything. Please check your spelling.") : setGameResults(results)
      })
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