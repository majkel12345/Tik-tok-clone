import React from 'react'
import '../styles/VideoFooter.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

const VideoFooter = ({channel, description, song}) => {
    return(
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>{channel}</h3>
                <p>{description}</p>
                <MusicNoteIcon className='videoFooter__icon'/>
                <div className='videoFooter__ticker'>
                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>  
            </div>
            <AccessTimeIcon className='videoFooter__record'/>
        </div>
    );
}


export default VideoFooter;