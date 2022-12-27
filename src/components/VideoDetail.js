import React from 'react'

const VideoDetail = ({video}) => {
    if(!video){
        return(
            <div>
               Loading . . . 
            </div>
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div className='container'>
      <iframe title='video player' src={videoSrc} width="800" height="400" />
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  )
}

export default VideoDetail