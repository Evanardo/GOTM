import { useLocation } from "react-router-dom";

const GameDetail = (props) => {
    const location = useLocation()
    const { game } = location.state
    console.log(game)

    return (
        <div className="checklist">
            <div className="card-gotm">
                <div className="card-body">
                    <h1>{game.name}</h1>
                    <p>Released: {game.released}</p>
                    <p>Rating: {game.rating}/5</p>
                    <br />
                    <h5>Genre:</h5>
                    {
                        game.genres.map(g => `${g.name} | `)
                    }
                    <br />
                    <br />
                    <h5>Platform(s):</h5>
                    {
                        game.platforms.map(p => `${p.platform.name} | `)
                    }
                    <div className="card-body-footer">
                        <button className="btn-movement">Join the movement...</button>
                    </div>
                </div>
            </div>

            <div className="results-container">
                <ul>
                    {
                        game.short_screenshots.map(ss =>
                            <li className="card-gotm-2">
                                <img src={ss.image}

                                    alt='screenshots'>

                                </img>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
}


export default GameDetail;