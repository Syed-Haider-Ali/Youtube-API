import React,{useState,useEffect} from 'react'
import SearchBar from './components/SearchBar'
// import Youtube from './APIs/Youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import useVideos from './hooks/useVideos'

const App = ()=>{
    
    const [selectedVideo, setSelectedVideo] = useState(null)

    const [videos,search] = useVideos('cars')

    useEffect(()=>{
        setSelectedVideo(videos[0])
    },[videos])
    // setSelectedVideo(response.data.items[0])
     

    const onVideoSelect = (video)=>{
        console.log(`From App.js!`, video)
        setSelectedVideo(video)
    }
    return(
        <>
            <h1></h1>
            <SearchBar onFormSubmit={search}/>
            <VideoDetail video={selectedVideo} />
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </>
    )
}

export default App;