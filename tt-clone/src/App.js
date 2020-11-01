import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video'
import DATABASE_URL from './index'
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch(`${DATABASE_URL}/.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const arrayVideos = data
      ? Object
          .keys(data)
          .map(key => {
              return {
                  id: key,
                  ...data[key]
              }
          })
      : []
      setVideos(arrayVideos)
      setLoading(false)
    }) 
  },[videos])
  
  

  return (
    <div className="app">
      <div className='app__videos'>
        {loading ?
        <CircularProgress />
        :
        videos.map((video)=> {
          return <Video
          key ={video.id} 
          likes = {video.likes}
          messages = {video.messages}
          shares = {video.shares}
          url={video.url}
          channel={video.channel}
          description={video.description}
          song={video.song}
        />
        })
        }
        
      </div>
    </div>
  );
}

export default App;
