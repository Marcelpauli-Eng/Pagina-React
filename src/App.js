import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import ImageGallery from './components/ImageGallery';
import AudioPlayer from './components/AudioPlayer';
import Model3D from './components/Model3D';
import ActivityList from './components/ActivityList';
import Footer from './components/Footer';

function App() {
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleActivityToggle = React.useCallback((activity) => {
    if (!activity || !activity.id) return;
    
    setSelectedActivities(prev => {
      const activityId = activity.id;
      const isSelected = prev.some(a => a && a.id === activityId);
      
      if (isSelected) {
        // Eliminar de la lista
        return prev.filter(a => a && a.id !== activityId);
      } else {
        // Añadir a la lista - crear una copia del objeto
        return [...prev, {
          id: activity.id,
          name: activity.name,
          description: activity.description,
          duration: activity.duration,
          category: activity.category,
          image: activity.image
        }];
      }
    });
  }, []);

  const handleRemoveActivity = React.useCallback((activityId) => {
    setSelectedActivities(prev => {
      const newList = prev.filter(a => a && a.id !== activityId);
      return newList;
    });
  }, []);
  useEffect(() => {
    // Animaciones al hacer scroll
    const observerOptions = {
      threshold: 0.01,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Función para observar elementos después de que se rendericen
    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
      elements.forEach(el => {
        // Si el elemento ya está visible, animarlo inmediatamente
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          el.classList.add('animate-in');
        } else {
          observer.observe(el);
        }
      });
    };

    // Observar inmediatamente y después de un pequeño delay
    observeElements();
    setTimeout(observeElements, 100);

    return () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <About />
        <ImageGallery />
        <AudioPlayer />
        <Model3D />
        <Activities 
          selectedActivities={selectedActivities}
          onActivityToggle={handleActivityToggle}
        />
        <ActivityList 
          selectedActivities={selectedActivities}
          onRemoveActivity={handleRemoveActivity}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

