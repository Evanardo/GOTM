import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCross } from "react-icons/fa";
import { TbCross } from "react-icons/tb";
import { 
    SiPlaystation,
    SiPlaystation2,
    SiPlaystation3,
    SiPlaystation4,
    SiPlaystation5,
    SiPlaystationvita,
    SiSteam,
    SiXbox,
    SiNintendoswitch,
    SiWii,
    SiWiiu,
    SiNintendo3Ds,
    SiNintendogamecube,
    SiSega,
} from "react-icons/si";
// import { GiSunPriest } from "react-icons/gi";


const GameDetail = (props) => {
    const { isAuthenticated } = useAuth0();
    const location = useLocation();
    const { game } = location.state;
    const navigate = useNavigate();
    console.log(game)

    const starRating = () => {
        const star = [];
        const rating = Math.round(game.rating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                star.push(<FaCross key={i} />);
            } else {
                star.push(<TbCross key={i} />);
            }
        }
        return star;
    };

    const platformIcon = (platform) => {
        switch (platform) {
            case 'Nintendo 3DS':
                return <SiNintendo3Ds/>;
            case 'Sega' && 'Genesis' && 'Megadrive' && 'Game Gear':
                return <SiSega/>
            case 'GameCube':
                return <SiNintendogamecube/>;
            case 'Wii':
                return <SiWii/>;
            case 'Wii':
                return <SiWiiu/>
            case 'Nintendo Switch':
                return <SiNintendoswitch/>;
            case 'PC':
                return <SiSteam />;
            case 'PlayStation':
                return <SiPlaystation />;
            case 'PlayStation 2':
                return <SiPlaystation2 />;
            case 'PlayStation 3':
                return <SiPlaystation3 />;
            case 'PlayStation 4':
                return <SiPlaystation4 />;
            case 'PlayStation 5':
                return <SiPlaystation5 />;
            case 'PS Vita':
                return <SiPlaystationvita />;
            case 'Xbox 360':
                return <p id="x360"><SiXbox/> 360</p>;
                // return <p id="x360">Xbox 360</p>;
            case 'Xbox Series S/X' && 'Xbox One':
                return <SiXbox />; 
        }
    }

    const handleClick = () => {
        navigate(-1, {replace: true});
    };


    return (
        <div className='profile'>
            <section id='dossier'>
                <h1>Details</h1>
                <div className="back2">
                <button onClick={handleClick} className="btn">Back to Search</button>
                </div>
                
                <div className='card-gd-profile'>
                    
                    <div className="checklist">
                        <div className="card-gd">
                            <div className="card-body" >
                                <h1>{game.name}</h1>
                                <p>Released: {game.released}</p>
                                <p>Rating: {game.rating} / 5 &nbsp;&nbsp;
                                    <ul>{starRating()}</ul></p>
                                <p>Metacritic: {game.metacritic}</p>
                                
                                {/* <p>Playtime: {game.playtime}hrs</p> */}
                                <p>Genres:&nbsp;&nbsp;
                                {
                                game.genres.map(g => `[ ${g.name} ] `)
                                }
                                </p>
                                <p>Platforms:
                                <div id="platform-lo">
                                {
                                    game.platforms.map(p => (
                                        
                                            <h2 id="platformWicons">
                                                &nbsp;{platformIcon(p.platform.name)}&nbsp;
                                                {/* <p>{p.platform.name}</p> */}
                                            </h2>
                                        
                                    ))
                                }
                                </div>
                                </p>
                                {/* <h5>About:</h5>
                        {game.discription_raw} */}
                                <div className="card-body-footer">
                                    
                                    {isAuthenticated ? (
                                        <>
                                        {/* <Link className="btn-movement">Join the movement&nbsp;</Link> */}
                                        <Link to='/collection' className="btn-movement">Add to Collection&nbsp;</Link>
                                        <Link to='/profile' className="btn-movement">| Playing It</Link>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    
                                </div>
                            </div>
                        </div>

                        <div className="card" id="results-container-gd">
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