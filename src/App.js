import axios from 'axios';
import { useEffect, useState } from 'react';
import { Credentials } from './cred'
import './App.css';
import Portfolio from './components/portfolio';

require('dotenv').config();

function App() {

  const spotify = Credentials()

  const [token, setToken] = useState('')
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
      setToken(tokenResponse.data.access_token)

      let Aid = '79el7mcHYhXYW3Zek21i0L'
      axios('https://api.spotify.com/v1/artists/' + Aid + '/albums', {
          headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type' : 'application/json'
          },
          body: {
              'limit': 5
          }
      })
      .then(albumResponse => {
        const data = Array.from(albumResponse.data.items)
          setAlbums(data)
      })
    })
  }, [spotify.ClientId, spotify.ClientSecret])

  return (
    <div className="App">
      <p>Hi John</p>
      <Portfolio albums={albums}/>
    </div>
  );
}

export default App;
