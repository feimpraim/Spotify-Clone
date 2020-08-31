import React from "react";
import Login from './Login'
import "./App.css";
import { useEffect } from 'react';
import { useState}  from 'react';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player';
import {useDataLayerValue} from './DataLayer'

const spotify = new SpotifyWebApi(); // creating a new instance of spotiy


function App() {

//const [token, setToken] = useState(null);
const [{user, token},dispatch] = useDataLayerValue();


useEffect(() => {
  const hash = getTokenFromUrl();
  window.location.hash =""; //hiding the tocken so for security reasons
  const _token = hash.access_token;

 // console.log ("I HAVE A TOKEN>> ", token);

if (_token){

dispatch(
  {

  type: "SET_TOKEN",
  token: _token,
}
);

  //setToken(_token);


  spotify.setAccessToken(_token);

  spotify.getMe().then(
    user=>{ 
      dispatch(
        { 
          type: "SET_USER", 
          user: user,
        });
 });
 
 
 spotify.getUserPlaylists().then(
  (playlists)=>{ 
    dispatch(
      {
         type: "SET_PLAYLISTS", 
         playlists: playlists,
       });
});


spotify.getPlaylist("7GsKMff7WNlr4UseVhSOPY").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );


}




}, [token,dispatch])
//console.log("this is the user ->>",user);
//console.log("This is the token ->>",token);

  return (
    <div className="App">

{

  token ? (
    <Player spotify={spotify} />
  
  ) :(
 
  <Login />
  )
}




    </div>
  );
}

export default App;
