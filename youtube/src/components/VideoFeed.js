// VideoFeed.js
import React from 'react';



function VideoFeed() {
  const videos = [
    { 
      title: 'Understanding Algorithms', 
      channel: 'Tech Guru', 
      thumbnail: '', 
    },
    { 
      title: 'React for Beginners', 
      channel: 'Dev Academy', 
      thumbnail: '', 
    },
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
