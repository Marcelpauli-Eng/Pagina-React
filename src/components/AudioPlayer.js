import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section id="audio" className="audio-section">
      <h2 className="section-title">Audio Guide</h2>
      <p className="section-subtitle">
        Listen to our city's story and discover its hidden gems
      </p>
      
      <div className="audio-player-container">
        <div className="audio-player">
          <div className="audio-player-header">
            <div className="audio-icon">🎵</div>
            <div className="audio-info">
              <h3 className="audio-title">City Audio Guide</h3>
              <p className="audio-description">
                A 30+ second audio tour featuring local stories, ambient sounds, 
                and highlights of our city's most beautiful locations.
              </p>
            </div>
          </div>

          <audio
            ref={audioRef}
            src="/multimedia/audio/city-audio-guide.mp3"
            preload="metadata"
          />

          <div className="audio-controls">
            <button
              className="audio-play-button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>

            <div className="audio-progress-container" onClick={handleSeek}>
              <div className="audio-progress-bar">
                <div
                  className="audio-progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="audio-time">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="audio-features">
            <div className="audio-feature">
              <span className="feature-icon">🎙️</span>
              <span>Narrated Guide</span>
            </div>
            <div className="audio-feature">
              <span className="feature-icon">🌊</span>
              <span>Ambient Sounds</span>
            </div>
            <div className="audio-feature">
              <span className="feature-icon">📖</span>
              <span>Local Stories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioPlayer;

