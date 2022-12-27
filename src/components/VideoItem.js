import React from 'react'
import '../CSS/VideoItem.css'

const VideoItem = ({video, onVideoSelect})=>{
    return(
        <>
            <div style={{cursor: 'pointer'}} onClick={()=>{onVideoSelect(video) }} className='video-item' >
            <li className="list-group-item"><h6>{video.snippet.title}</h6>
                <img  className='video-item-img' src={video.snippet.thumbnails.medium.url} />
            </li>
            </div>
        </>
    )
} 

export default VideoItem;