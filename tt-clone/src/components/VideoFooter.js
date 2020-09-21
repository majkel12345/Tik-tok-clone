import React from 'react'
import '../styles/VideoFooter.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

const VideoFooter = () => {
    return(
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@lala</h3>
                <p>this is description</p>
                <MusicNoteIcon className='videoFooter__icon'/>
                <div className='videoFooter__ticker'>
                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                                <p>daj kamienia!</p>
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