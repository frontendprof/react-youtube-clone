
import React from 'react'

const VideoDetail = ({vid}) => {

    if(!vid){
        return <h4>Loading ...</h4>
    }

    const vidSrc=`https://www.youtube.com/embed/${vid.id.videoId}`;

    return (

        <div>

            <div className="ui embed">
                <iframe src={vidSrc} title="video player" />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {vid.snippet.title}

                </h4>
                <p>{vid.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
