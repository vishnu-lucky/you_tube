// VideoFeed.js
import React from 'react';


function VideoFeed() {
  const videos = [
    { title: 'Video 1', channel: 'Channel 1', thumbnail: 'thumbnail1.jpg' },
    { title: 'Video 2', channel: 'Channel 2', thumbnail: 'thumbnail2.jpg' },
    // Add more videos here
  ];

  return (
    <div className="videoFeed">
      {videos.map((video, index) => (
        <div key={index} className="videoCard">
          <img src={video.thumbnail} alt={video.title} />
          <div className="videoInfo">
            <h4>{video.title}</h4>
            <p>{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoFeed;
