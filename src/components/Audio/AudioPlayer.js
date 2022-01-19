import React from 'react';
import './Audio.css';
import { BsMusicPlayerFill } from 'react-icons/bs';
import { useState } from 'react';
import { HiPause } from 'react-icons/hi';
import { useRef } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (prevValue) {
      audioPlayer.current.play();
    } else audioPlayer.current.pause();
  };
  return (
    <div className="audio-player">
      <audio
        ref={audioPlayer}
        src="https://www.youtube.com/watch?v=d2ShwS109Ts"
        preload="metadata"
      ></audio>
      <button className="audio-button" onClick={togglePlayPause}>
        {isPlaying ? <BsMusicPlayerFill /> : <HiPause />}
      </button>
    </div>
  );
};

export { AudioPlayer };
