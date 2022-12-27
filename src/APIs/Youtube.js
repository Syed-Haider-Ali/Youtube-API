import axios from 'axios'

const KEY = 'AIzaSyA_BcT3ifBpKaYgKFiibo_PeYJG0kN9mjk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
