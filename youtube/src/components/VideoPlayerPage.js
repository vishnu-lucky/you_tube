import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import VideoFeed from './VideoFeed'; 

function VideoPlayerPage() {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const API_KEY = 'YOUR_API_KEY';  
  
  const videoId = new URLSearchParams(window.location.search).get('v');
  const RELATED_API_URL = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&part=snippet&key=${API_KEY}`;

  
  const fetchRelatedVideos = async () => {
    try {
      const response = await axios.get(RELATED_API_URL);
      setRelatedVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching related videos:', error);
    }
  };

  useEffect(() => {
    fetchRelatedVideos();
  }, [videoId]);

  return (
    <div className="videoPlayerPage">
     
      <div className="videoPlayer">
        <VideoPlayer videoId={videoId} />
      </div>

    
      <div className="recommendedVideos">
        <h4>Related Videos</h4>
        <VideoFeed videos={relatedVideos} />
      </div>
    </div>
  );
}

export default VideoPlayerPage;
