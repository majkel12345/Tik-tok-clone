import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import '../styles/Video.css'
import VideoFooter from './VideoFooter'

const Video = () => {


    const videoRef = useRef(null)
    const onVideoPress = () => {
        videoRef.current.play()
    }

    return(
        <div className='video'> 
            
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=kyoOPy4_GPs'
            className='videoPlayer' 
            loop
            width = '100%'
            height = '100%'
            onClick={onVideoPress}
            ref={videoRef}
            />
            <VideoFooter 
            channel='majk'
            description='jaja'
            song='daj  kamienia'
            />
            
            {/* <VidoeSidebar />
            <VideoFooter /> */}
        </div>
        
    );
}


export default Video