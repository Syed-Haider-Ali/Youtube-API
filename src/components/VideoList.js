import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect})=>{
    const renderedList = videos.map((video)=>{
        return (
            <>
                <ul className="list-group list-group-flush">
                    <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
                </ul>
            </>
            ) 
    })
    return(
        <>
        <div className='container'>
           Total: {videos.length} Videos
           {renderedList}
        </div>
           
        </>
    )
}

export default VideoList;