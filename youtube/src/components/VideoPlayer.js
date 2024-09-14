import React from 'react';

function VideoPlayer({ videoId }) {
  return (
    <div className="videoPlayer">
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
