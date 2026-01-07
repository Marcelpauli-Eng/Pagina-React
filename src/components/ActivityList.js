import React from 'react';
import './ActivityList.css';

const ActivityList = ({ selectedActivities = [], onRemoveActivity }) => {
  // Siempre mostrar la sección, incluso si está vacía
  if (!selectedActivities || selectedActivities.length === 0) {
    return (
      <section id="activity-list" className="activity-list-section">
        <h2 className="section-title slide-up">La meva llista d'activitats</h2>
        <div className="activity-list-empty" style={{ opacity: '1', transform: 'translateY(0)', display: 'block' }}>
          <div className="empty-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
          </div>
          <h3>La teva llista està buida</h3>
          <p>Fes clic a les activitats que t'interessen per afegir-les a la teva llista</p>
        </div>
      </section>
    );
  }

  return (
    <section id="activity-list" className="activity-list-section">
      <h2 className="section-title slide-up">La meva llista d'activitats</h2>
      <p className="section-subtitle slide-up">
        {selectedActivities.length} {selectedActivities.length === 1 ? 'activitat seleccionada' : 'activitats seleccionades'}
      </p>
      
      <div className="activity-list-container fade-in">
        <div className="activity-list-items">
          {selectedActivities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="activity-list-item fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="activity-list-item-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="activity-list-item-content">
                <div className="activity-list-item-header">
                  <h3 className="activity-list-item-name">{activity.name}</h3>
                  <button
                    className="activity-list-item-remove"
                    onClick={() => onRemoveActivity(activity.id)}
                    aria-label="Eliminar activitat"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
                <div className="activity-list-item-info">
                  <span className="activity-list-item-category">{activity.category}</span>
                  <span className="activity-list-item-duration">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {activity.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityList;

