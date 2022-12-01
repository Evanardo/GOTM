import { useLocation } from "react-router-dom";

const GameDetail = (props) => {
    const location = useLocation()
    const { game } = location.state
    console.log(game)

    return (
        <div className='profile'>
            <section id='dossier'>
                <h1>Details</h1>

                <div className='card-o-profile-2'>
                    <div className="checklist">
                        <div className="card-gotm">
                            <div className="card-body" >
                                <h1>{game.name}</h1>
                                <p>Released: {game.released}</p>
                                <p>Rating: {game.rating}/5</p>

                                <h5>Genre: </h5>
                                <br />
                                <div className="genres">
                                    {
                                        game.genres.map(g => `${g.name} | `)
                                    }
                                </div>
                                <br />
                                <br />

                                <h5>Platform(s):</h5>
                                <br />
                                {
                                    game.platforms.map(p => `${p.platform.name} | `)
                                }
                                <br /><br />
                                {/* <h5>About:</h5>
                        {game.discription_raw} */}
                                <div className="card-body-footer">
                                    <button className="btn-movement">Join the movement |</button>
                                    <button className="btn-movement">Add to Collection</button>
                                </div>
                            </div>
                        </div>

                        <div className="card" id="results-container-2">
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
                </div>
            </section>
        </div>
    );
}


export default GameDetail;


// import { useSelector } from "react-redux";


// const GameDeets = ({ pathId }) => {
//     const { screenshots, game } = useSelector((state) => state.detail);
//     const history = useHistory();
//     const exitDetailHandler = (e) => {
//         const element = e.target;
//         if (element.classList.contains('shadow')) {
//             document.body.style.overflow = 'auto';
//             history.push('/games');
//         }
//     };

//     return(
    
//         <div className="checklist" onClick={exitDetailHandler}>
//             <div className="card-gotm" layoutId={pathId}>
//                 <div className="card-body">
//                     <h1 layoutId={`title ${pathId}`}>{game.name}</h1>
//                     <p>Released: {game.released}</p>
//                     <p>Rating: {game.rating}/5</p>

//                     <h5>Genre:</h5>
//                     {
//                         game.genres.map((g) => `${g.name} | `)
//                     }
                    
//                     {
//                         game.platforms.map((p) => `${p.platform.name} | `)
//                     }
//                     <br />
//                     <br />
//                     <h5>About:</h5>
//                     <p>{game.description_raw}</p>
//                     <div className="card-body-footer">
//                         <button className="btn-movement">Join the movement |</button>
//                         <button className="btn-movement">Add to Collection</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="results-container">
//                 <ul>
//                     {
//                         game.screenshots.map(ss =>
//                             <li className="card-gotm-2">
//                                 <img src={screenshots.image}

//                                     alt='screenshots'>

//                                 </img>
//                             </li>)
//                     }
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default {GameDeets};

