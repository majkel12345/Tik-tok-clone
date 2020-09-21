import React, { useState } from 'react'
import '../styles/VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSidebar = ({likes, messages, shares}) => {

    const [liked, setLiked] = useState(false);
    // const [count, setCount] = useState(0)

    const handleOnClicked = () => {
        !liked ?
        setLiked(true)
        :
        setLiked(false)
    }

    return(
        <div className='videoSidebar'>
            
            <div className='videoSidebar__button'>
                {liked ? 
                <FavoriteIcon 
                onClick = {handleOnClicked}
                />
                :
                <FavoriteBorderIcon 
                onClick = {handleOnClicked}
                />
                }
                <p>{liked? likes + 1 : likes }</p>
            </div>
            <div className='videoSidebar__button'>
                <MessageIcon />
                <p>{messages}</p>
            </div>
            <div className='videoSidebar__button'>
                <ShareIcon />
                <p>{shares}</p>
            </div>
            
        </div>
    )
}


export default VideoSidebar