import React from 'react';
import './AudioPlayer.css';

export default function AudioPlayer() {
  return (
    <>
      <div className="audio-container">
        <audio
          controls
          src="https://ipvfiyhmiwmzfnzlbhov.supabase.in/storage/v1/object/public/music/playlist.mp3"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </>
  );
}
