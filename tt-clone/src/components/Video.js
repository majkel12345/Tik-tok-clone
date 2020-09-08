import React, { useRef } from 'react'
import '../styles/Video.css'

const Video = () => {


    const videoRef = useRef(null)
    const onVideoPress = () => {
        videoRef.current.play()
    }

    return(
        <div className='video'> 
            
            <video 
            className='videoPlayer' 
            controls
            loop
            onClick={onVideoPress}
            ref={videoRef}
            >
                <source src="./movie.mp4" type="video/mp4"/>
                
            </video>
            
            {/* <VidoeSidebar />
            <VideoFooter /> */}
        </div>
        
    );
}


export default Video