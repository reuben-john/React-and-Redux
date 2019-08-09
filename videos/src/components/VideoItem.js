import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        {video.snippet.title}
        <div className="header"></div>
      </div>
    </div>
  );
};

export default VideoItem;
