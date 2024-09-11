// VideoPlayer.js
import React from 'react';


function VideoPlayer({ video }) {
  return (
    <div className="videoPlayer">
      <video controls>
        <source src={video.url} type="video/mp4" />
      </video>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
}

export default VideoPlayer;
