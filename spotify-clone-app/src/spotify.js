/*
Doucumetnation
hhttps://developer.spotify.com
/documentation/web-playback-sdk/quick-start/
*/
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectURL ="http://localhost:3000/";
const clientId = "11a4997e740644d8a711818057608d03"

/*scopes*/
const scopes = [

    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-playback-position",
    "user-library-modify",

];

export const getTokenFromUrl = () => {
    //pulling access token from URl
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
return initial;
    },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

