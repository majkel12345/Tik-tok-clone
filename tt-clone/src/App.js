import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video'
import DATABASE_URL from './index'
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  const handleOnScroll = (e) => {
    let element = e.target
    console.log(element.scrollTop)
  }

  useEffect(() => {
    fetch(`${DATABASE_URL}/.json`)
    .then(response => response.json())
    .then(data => {
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
  },[])
  
  

  return (
    <div className="app">
      <div className='app__videos'
      onScroll={handleOnScroll}
      >
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
