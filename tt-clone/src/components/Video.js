import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import '../styles/Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VidoeSidebar'

const Video = ({likes, messages, shares, channel, description, song, url}) => {


    const videoRef = useRef(null)
    const onVideoPress = () => {
        videoRef.current.play()
    }

    return(
        <div className='video'> 
            
            <ReactPlayer 
            url={url}
            className='videoPlayer' 
            loop
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
            
            {/* <VidoeSidebar />
            <VideoFooter /> */}
        </div>
        
    );
}


export default Video