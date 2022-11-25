import React from "react";


const GameDetail = (props) => {

    const { game } = props.location.gamesProps

    
    return (
        
        <div className="card">
            <h1>{game.name}</h1>
            <p>Released: {game.released}</p>
            <p>Rating: {game.rating}</p>
            <h3>Genre:</h3>
                {
                    game.genres.map(g => `${g.name} | `)
                }
            <h3>Platform(s):</h3>
                {
                    game.platforms.map(p => `${p.platform.name} | `)
                }
            <ul>
                {
                    game.short_screenshots.map(ss => 
                        <li>
                            <img src={ss.image}

                            alt = 'screenshot'>

                            </img>
                        </li>)
                }
            </ul>
        </div>
    );
}


export default GameDetail;