import React from 'react';
import './Activities.css';

const Activities = ({ onActivityToggle, selectedActivities }) => {
  const activities = [
    {
      id: 1,
      name: 'Historic City Tour',
      description: 'Explore the rich history and architecture of our city with a guided walking tour.',
      duration: '2 hours',
      price: '€25',
      image: '/multimedia/images/activity-historic.jpg',
      icon: '🏛️'
    },
    {
      id: 2,
      name: 'Food & Culture Experience',
      description: 'Taste local cuisine and learn about our culinary traditions.',
      duration: '3 hours',
      price: '€45',
      image: '/multimedia/images/activity-food.jpg',
      icon: '🍽️'
    },
    {
      id: 3,
      name: 'Sunset Boat Cruise',
      description: 'Enjoy breathtaking views of the city skyline from the water.',
      duration: '1.5 hours',
      price: '€35',
      image: '/multimedia/images/activity-boat.jpg',
      icon: '⛵'
    },
    {
      id: 4,
      name: 'Art Gallery Visit',
      description: 'Discover contemporary and classical art in our renowned galleries.',
      duration: '2 hours',
      price: '€20',
      image: '/multimedia/images/activity-art.jpg',
      icon: '🎨'
    },
    {
      id: 5,
      name: 'Mountain Hiking Adventure',
      description: 'Experience nature trails with stunning panoramic city views.',
      duration: '4 hours',
      price: '€40',
      image: '/multimedia/images/activity-hiking.jpg',
      icon: '⛰️'
    },
    {
      id: 6,
      name: 'Nightlife Tour',
      description: 'Explore the vibrant nightlife scene with local guides.',
      duration: '3 hours',
      price: '€30',
      image: '/multimedia/images/activity-nightlife.jpg',
      icon: '🌃'
    }
  ];

  const isSelected = (activityId) => {
    return selectedActivities.some(activity => activity.id === activityId);
  };

  return (
    <section id="activities" className="activities-section">
      <h2 className="section-title">Choose Your Activities</h2>
      <p className="section-subtitle">
        Select the activities you'd like to experience during your visit
      </p>
      <div className="activities-grid">
        {activities.map(activity => (
          <div
            key={activity.id}
            className={`activity-card ${isSelected(activity.id) ? 'selected' : ''}`}
            onClick={() => onActivityToggle(activity)}
          >
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-image-container">
              <div className="activity-image-placeholder">
                {activity.icon}
              </div>
            </div>
            <div className="activity-content">
              <h3 className="activity-name">{activity.name}</h3>
              <p className="activity-description">{activity.description}</p>
              <div className="activity-details">
                <span className="activity-duration">⏱️ {activity.duration}</span>
                <span className="activity-price">{activity.price}</span>
              </div>
            </div>
            <div className="activity-checkbox">
              {isSelected(activity.id) ? '✓' : '+'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;

