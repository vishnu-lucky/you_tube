import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoFeed from './components/VideoFeed';
import VideoPlayer from './components/VideoPlayer';
import CommentsSection from './components/CommentsSection';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const comments = [
    { user: 'User1', text: 'Great video!' },
    { user: 'User2', text: 'Very informative.' },
  ];

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} />
      <div className="app__body">
        <Sidebar />
        <div className="app__mainContent">
          {selectedVideo ? (
            <>
              <VideoPlayer video={selectedVideo} />
              <CommentsSection comments={comments} />
            </>
          ) : (
            <VideoFeed searchTerm={searchTerm} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
