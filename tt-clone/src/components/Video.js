import React, {useState, useRef, useEffect} from 'react'
import '../styles/Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VidoeSidebar'

const Video = ({likes, messages, shares, channel, description, song, url, onscroll}) => {

    const [play, setPlay] = useState(false);
    const myRef = useRef(null);
    const [offset, setOffset] = useState(0); 

    const onVideoPress = () => {
        if(!play) {
            setPlay(true)
            myRef.current.play()
        }
        
        if(play) {
            setPlay(false)
            myRef.current.pause()
        }
    }


    

    return(
    
        <div className='video'>         
            <video 
            className='videoPlayer' 
            loop
            playing = {false}
            ref={myRef}
            width = '100%'
            height = '100%'
            onClick={onVideoPress}
            >
                <source src={url}></source>

            </video>
            
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