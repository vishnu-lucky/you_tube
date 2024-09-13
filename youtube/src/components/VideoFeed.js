import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoFeed({ searchTerm }) {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [trending, setTrending] = useState(true); 

  const API_KEY = 'AIzaSyDpN6v_Gt9_IO05Ar3lhaRCEtwEDHnuqko';  
  const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${API_KEY}`;
  const TRENDING_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${API_KEY}`;  // URL for trending videos

  const fetchVideos = async (url, pageToken = '') => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${url}&q=${searchTerm}&maxResults=50&pageToken=${pageToken}`
      );
      
      const newVideos = response.data.items;
      setVideos(prevVideos => [...prevVideos, ...newVideos]);
      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    }

    setLoading(false);
  };

  const fetchTrendingVideos = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${TRENDING_API_URL}&maxResults=50`
      );
      
      const newVideos = response.data.items;
      setVideos(newVideos);
      setTrending(true);
    } catch (error) {
      console.error('Error fetching trending YouTube videos:', error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (searchTerm) {
      setTrending(false);
      setVideos([]);  
      fetchVideos(YOUTUBE_API_URL);
    } else {
      fetchTrendingVideos();  
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.scrollHeight && !loading && nextPageToken) {
        fetchVideos(YOUTUBE_API_URL, nextPageToken);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, nextPageToken]);

  return (
    <div className="videoFeed">
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div key={index} className="videoCard">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <div className="videoInfo">
              <h4>{video.snippet.title}</h4>
              <p>{video.snippet.channelTitle}</p>
            </div>
          </div>
        ))
      ) : (
        <p>{trending ? "No trending videos found." : "No search results found."}</p>
      )}

      {loading && <p>Loading more videos...</p>}
    </div>
  );
}

export default VideoFeed;
