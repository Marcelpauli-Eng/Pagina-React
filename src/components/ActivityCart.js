import React from 'react';
import './ActivityCart.css';

const ActivityCart = ({ selectedActivities, onRemoveActivity }) => {
  const totalPrice = selectedActivities.reduce((sum, activity) => {
    if (activity.price === 'Gratuït') return sum;
    const price = parseInt(activity.price.replace('€', ''));
    return sum + price;
  }, 0);

  const freeActivities = selectedActivities.filter(a => a.price === 'Gratuït').length;
  const paidActivities = selectedActivities.filter(a => a.price !== 'Gratuït').length;

  if (selectedActivities.length === 0) {
    return (
      <section className="cart-section">
        <div className="cart-empty">
          <div className="cart-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 2L7 6m0 0L5 10m2-4h10m0 0l2 4m-2-4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m12 0H7"/>
            </svg>
          </div>
          <h3>La teva cistella està buida</h3>
          <p>Selecciona activitats a dalt per afegir-les a la cistella</p>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <h2 className="section-title">Les teves activitats seleccionades</h2>
      <div className="cart-container">
        <div className="cart-items">
          {selectedActivities.map(activity => (
            <div key={activity.id} className="cart-item">
              <div className="cart-item-icon">{activity.icon}</div>
              <div className="cart-item-details">
                <h4 className="cart-item-name">{activity.name}</h4>
                <p className="cart-item-info">
                  <span>⏱️ {activity.duration}</span>
                  <span className={`cart-item-price ${activity.price === 'Gratuït' ? 'free' : ''}`}>
                    {activity.price}
                  </span>
                </p>
              </div>
              <button
                className="cart-item-remove"
                onClick={() => onRemoveActivity(activity.id)}
                aria-label="Eliminar activitat"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-stats">
            {freeActivities > 0 && (
              <div className="stat-item">
                <span className="stat-label">Activitats gratuïtes:</span>
                <span className="stat-value">{freeActivities}</span>
              </div>
            )}
            {paidActivities > 0 && (
              <div className="stat-item">
                <span className="stat-label">Activitats de pagament:</span>
                <span className="stat-value">{paidActivities}</span>
              </div>
            )}
          </div>
          <div className="cart-total">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-price">
              {totalPrice > 0 ? `€${totalPrice}` : 'Gratuït'}
            </span>
          </div>
          <button className="cart-checkout-btn">
            Reservar activitats
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivityCart;

