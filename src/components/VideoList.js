
import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos,onVideoSelect}) => {
    const renderedList=videos.map(vi=> <VideoItem video={vi} key={vi.id.videoId} onVideoSelect={onVideoSelect} />)


    return (
        <div className="ui relaxed divided list">
           {renderedList}
        </div>
    )
}

export default VideoList
