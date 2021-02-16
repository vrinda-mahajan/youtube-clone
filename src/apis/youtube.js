import axios from "axios";

const KEY = 'AIzaSyDGbAMOxdRd2uA4J8CBgfpMmjdfur_Kvho';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key:KEY
    }
})