import React from "react";
import VideoList from "./videoList";

const VideoItems =({video}) =>{
    return <div>
    <img src={video.snippet.thumbnails.medium.url}></img>
    {video.snippet.title}</div>
}

export default VideoItems;