import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import CommentsSection from './CommentsSection'; 
import VideoFeed from './VideoFeed'; 

function VideoPlayerPage() {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const API_KEY = 'AIzaSyDpN6v_Gt9_IO05Ar3lhaRCEtwEDHnuqko';  

 
  const videoId = new URLSearchParams(window.location.search).get('v');
  const RELATED_API_URL = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&part=snippet&key=${API_KEY}`;
  const COMMENTS_API_URL = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;

  
  const fetchRelatedVideos = async () => {
    try {
      const response = await axios.get(RELATED_API_URL);
      setRelatedVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching related videos:', error);
    }
  };

 
  const fetchComments = async () => {
    try {
      const response = await axios.get(COMMENTS_API_URL);
      setComments(response.data.items);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchRelatedVideos();
    fetchComments(); 
  }, [videoId]);

  return (
    <div className="videoPlayerPage">
      {/* Video Player */}
      <div className="videoPlayer">
        <VideoPlayer videoId={videoId} />
      </div>

   
      <div className="commentsSection">
        <CommentsSection comments={comments} />
      </div>

      
      <div className="recommendedVideos">
        <h4>Related Videos</h4>
        <VideoFeed videos={relatedVideos} />
      </div>
    </div>
  );
}

export default VideoPlayerPage;
