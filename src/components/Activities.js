import React, { useEffect } from 'react';
import './Activities.css';

const Activities = ({ selectedActivities = [], onActivityToggle }) => {
  // Forzar re-render cuando cambia selectedActivities
  useEffect(() => {
    // Este efecto asegura que el componente se actualice cuando cambia selectedActivities
  }, [selectedActivities]);
  const getActivityImage = (id) => {
    const activityImages = {
      1: '/multimedia/images/recollida-bolets.jpg', // Recollida de Bolets
      2: '/multimedia/images/senderisme-montseny.jpg', // Senderisme al Montseny
      3: '/multimedia/images/torrassa-activitat.jpg', // Visita a la Torrassa del Moro
      4: '/multimedia/images/castellnou-activitat.jpg', // Visita al Castellnou
      5: '/multimedia/images/gastronomia.jpg' // Gastronomia (mantener)
    };
    return activityImages[id] || '';
  };

  const activities = [
    {
      id: 1,
      name: 'Recollida de Bolets',
      description: 'Participa en la recollida de rovellons i altres bolets durant la temporada d\'octubre.',
      duration: '3 hores',
      image: '/multimedia/images/recollida-bolets.jpg',
      category: 'Natura'
    },
    {
      id: 2,
      name: 'Senderisme al Montseny',
      description: 'Explora els senders que travessen el Montseny i la Serra del Corredor amb guies locals.',
      duration: '4 hores',
      image: '/multimedia/images/senderisme-montseny.jpg',
      category: 'Natura'
    },
    {
      id: 3,
      name: 'Visita a la Torrassa del Moro',
      description: 'Descobreix la torre de defensa d\'origen romà amb vistes privilegiades del Vallès i el Maresme.',
      duration: '1.5 hores',
      image: '/multimedia/images/torrassa-activitat.jpg',
      category: 'Història'
    },
    {
      id: 4,
      name: 'Visita al Castellnou',
      description: 'Descobreix el castell renaixentista del segle XVI i la seva història fascinant.',
      duration: '2 hores',
      image: '/multimedia/images/castellnou-activitat.jpg',
      category: 'Història'
    },
    {
      id: 5,
      name: 'Gastronomia Local',
      description: 'Degusta la cuina tradicional catalana al restaurant La Nit de Llinars.',
      duration: '2.5 hores',
      image: '/multimedia/images/gastronomia.jpg',
      category: 'Gastronomia'
    }
  ];

  return (
    <section id="activities" className="activities-section">
      <h2 className="section-title slide-up">Activitats a Llinars del Vallès</h2>
      <p className="section-subtitle slide-up">
        Descobreix les activitats que pots fer durant la teva visita al poble
      </p>
      <div className="activities-grid">
        {activities.map((activity, index) => {
          // Verificar si la actividad está seleccionada comparando IDs
          const isSelected = (() => {
            if (!selectedActivities || !Array.isArray(selectedActivities) || selectedActivities.length === 0) {
              return false;
            }
            return selectedActivities.some(a => {
              if (!a || !a.id || !activity.id) return false;
              // Comparar IDs como números para asegurar que funcione
              return Number(a.id) === Number(activity.id);
            });
          })();
          return (
            <div
              key={activity.id}
              className={`activity-card fade-in ${isSelected ? 'selected' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onActivityToggle) {
                  onActivityToggle(activity);
                }
              }}
            >
              <div className="activity-image-container">
                <img 
                  src={activity.image || getActivityImage(activity.id)}
                  alt={activity.name}
                  className="activity-image"
                  onError={(e) => {
                    const fallback = getActivityImage(activity.id);
                    if (fallback && e.target.src !== fallback) {
                      e.target.src = fallback;
                    } else {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="activity-image-placeholder" style={{display: 'none'}}>
                  <div className="placeholder-text-small">{activity.category}</div>
                </div>
                <div className="activity-category">{activity.category}</div>
                {isSelected && (
                  <div className="activity-selected-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="activity-content">
                <h3 className="activity-name">{activity.name}</h3>
                <p className="activity-description">{activity.description}</p>
                <div className="activity-duration">
                  <span>{activity.duration}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Activities;

