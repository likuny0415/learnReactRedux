import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })

    // props.videos contain the videos we fetch from 
    // google API
    // className='ui relaxed divided list' ==> semantic ui
    return <div className='ui relaxed divided list' >{renderedList}</div>
}

export default VideoList