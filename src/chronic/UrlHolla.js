const urlHolla = { 
    games: "https://api.rawg.io/api/games", 
    consoles: "https://api.rawg.io/api/platforms",
    gameDeets: (id) => `https://api.rawg.io/api/games${id}`,
    gameImages: (id) => `https://api.rawg.io/api/games${id}/screenshots`
};
export default urlHolla;

// const base_url = "https://api.rawg.io/api/";

// const apiKey = process.env.REACT_APP_API_KEY

// const search_games = `games?key=${apiKey}&search=`;

// const game_deets = "games/";

// export const searchGames = slug => `${ base_url }${ search_games }${ slug }`;
// export const gameDeets = slug_id => `${ base_url }${ game_deets }${ slug_id }?key=${ apiKey }`;