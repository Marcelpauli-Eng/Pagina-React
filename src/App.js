import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import ActivityCart from './components/ActivityCart';
import ImageGallery from './components/ImageGallery';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

function App() {
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleActivityToggle = (activity) => {
    setSelectedActivities(prev => {
      const isSelected = prev.find(item => item.id === activity.id);
      if (isSelected) {
        return prev.filter(item => item.id !== activity.id);
      } else {
        return [...prev, activity];
      }
    });
  };

  const handleRemoveActivity = (activityId) => {
    setSelectedActivities(prev => prev.filter(item => item.id !== activityId));
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <ImageGallery />
        <AudioPlayer />
        <Activities 
          onActivityToggle={handleActivityToggle}
          selectedActivities={selectedActivities}
        />
        <ActivityCart 
          selectedActivities={selectedActivities}
          onRemoveActivity={handleRemoveActivity}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

