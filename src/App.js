import axios from 'axios';
import { useEffect, useState } from 'react';
import { Credentials } from './cred'
import './App.css';
import Portfolio from './components/portfolio';
import Header from './components/nav'
import Bio from './components/bio'
import Resume from './components/resume';

function App() {

  const spotify = Credentials()

  const [albums, setAlbums] = useState()

  useEffect(() => {
    const id = spotify.ClientId;
    const secret = spotify.ClientSecret;

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-type' : 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' +  btoa(id + ':' + secret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      const token = tokenResponse.data.access_token
      const Aid = '56ry90LlqAoQ2mAyWY7cO4'
      axios('https://api.spotify.com/v1/artists/'+ Aid +'/albums', {
          headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type' : 'application/json'
          },
      })
      .then(albumResponse => {
        const data = Array.from(albumResponse.data.items)
          setAlbums(data)
      })
    })
  }, [spotify.ClientId, spotify.ClientSecret])

  return (
    <div className="App">
      <Header />
      <Portfolio albums={albums}/>
      <Bio />
      <Resume />
      
      
    </div>
  );
}

export default App;