import {useState, useEffect} from 'react'
import Youtube from '../APIs/Youtube'

const useVideos = (defaultTerm)=>{

    const [videos,setVideos] = useState([])

    useEffect(()=>{
        search(defaultTerm)
    },[defaultTerm])

    const search = async (term)=>{
        console.log(term)
        const response = await Youtube.get('/search', {
            params:{
                q: term
            }
        })
        console.log(response)
        console.log(response.data.items)

        setVideos(response.data.items)

    }

    return [videos, search]

}

export default useVideos;