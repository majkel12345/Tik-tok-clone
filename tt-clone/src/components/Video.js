import React, {useRef, useState} from 'react'
import ReactPlayer from 'react-player'
import '../styles/Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VidoeSidebar'

const Video = ({likes, messages, shares, channel, description, song, url}) => {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return(
        <div className='video'> 
            
            <ReactPlayer 
            url={url}
            className='videoPlayer' 
            loop
            controls
            width = '100%'
            height = '100%'
            onClick={onVideoPress}
            ref={videoRef}
            />
            <VideoFooter 
            channel={channel}
            description={description}
            song={song}
            />

            <VideoSidebar 
            likes = {likes}
            messages = {messages}
            shares = {shares}
            />
        </div>
        
    );
}


export default Video