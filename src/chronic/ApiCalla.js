import axios from "axios";
import urlHolla from "./Urlholla";

const apiKey = process.env.REACT_APP_API_KEY;

function getSearchedGames(query){
    return axios.get(urlHolla.games,{ params: {
        key: apiKey,
        search: query,
    }});
}

function getConsoles(){
    return axios.get(urlHolla.consoles, { params: {
        key: apiKey,
    }});
}

function getGameDeets(id){
    return axios.get(urlHolla.gameDeets(id),{ params: {
        key: apiKey,
    }});
}

function getImages(id){
    return axios.get(urlHolla.gameImages(id), { params: {
        key: apiKey,
    }});
}

function getDefaultGames(){
    return axios.get(urlHolla.games,{ params: {
        key: apiKey,
    }});
}

export { getSearchedGames, getConsoles, getGameDeets, getImages, getDefaultGames };
