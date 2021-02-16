import React from "react";
import VideoItems from "./videoItems";

const VideoList = ({videos}) =>{
   const renderedList = videos.map((video) => {
        return <VideoItems video={video} />
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;