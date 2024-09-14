import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoFeed from './components/VideoFeed';
import VideoPlayer from './components/VideoPlayerPage';
import CommentsSection from './components/CommentsSection';
import VideoPlayerPage from './components/VideoPlayerPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const comments = [
    { user: 'User1', text: 'Great video!' },
    { user: 'User2', text: 'Very informative.' },
  ];

  
  const resetSearchTerm = () => {
    setSearchTerm(''); 
    setSelectedVideo(null); 
  };

  return (
    <Router>
      <div className="app">
        <Header setSearchTerm={setSearchTerm} />
        <div className="app__body">
          
          <Sidebar resetSearchTerm={resetSearchTerm} /> 
          <div className="app__mainContent">
            <Routes>
              <Route path="/" element={<VideoFeed searchTerm={searchTerm} />} />
              <Route path="/trending" element={<VideoFeed searchTerm="trending" />} />
              <Route path="/subscriptions" element={<div>Subscriptions Page</div>} />
              <Route path="/library" element={<div>Library Page</div>} />
              <Route path="/history" element={<div>History Page</div>} />
              <Route path="/watch" element={<VideoPlayerPage />} />
              <Route 
                path="/watch" 
                element={
                  selectedVideo ? (
                    <>
                      <VideoPlayer video={selectedVideo} />
                      <CommentsSection comments={comments} />
                    </>
                  ) : (
                    <div>No video selected</div>
                  )
                } 
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
