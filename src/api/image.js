import  axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3fca4260e8d54bbd93f1f9d7cf8af6254e9a16e4831aec2d651bf5176b7c48ba'
    }
})