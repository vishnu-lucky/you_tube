// VideoFeed.js
import React from 'react';

function VideoFeed() {
  const videos = [
    { 
      title: 'SIDEMEN AMONG US PROXIMITY CHAT BUT EVERYONE S A JESTER', 
      channel: 'SIDE MAN', 
      thumbnail: 'yt2.png',  // Name of the image file
    },
    { 
      title: 'AUS VS ENG', 
      channel: 'ICC', 
      thumbnail: 'yt3.png',  // Name of the second image file
    },
  ];

  return (
    <div className="videoFeed">
      {videos.map((video, index) => (
        <div key={index} className="videoCard" style={{ width: '300px', height: '200px' }}>
          <img 
            src={require(`../img/${video.thumbnail}`)}  // Dynamically require the image
            alt={video.title} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
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
