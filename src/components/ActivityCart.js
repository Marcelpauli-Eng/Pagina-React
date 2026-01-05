import React from 'react';
import './ActivityCart.css';

const ActivityCart = ({ selectedActivities, onRemoveActivity }) => {
  const totalPrice = selectedActivities.reduce((sum, activity) => {
    const price = parseInt(activity.price.replace('€', ''));
    return sum + price;
  }, 0);

  if (selectedActivities.length === 0) {
    return (
      <section className="cart-section">
        <div className="cart-empty">
          <div className="cart-icon">🛒</div>
          <h3>Your Activity Cart is Empty</h3>
          <p>Select activities above to add them to your cart</p>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <h2 className="section-title">Your Selected Activities</h2>
      <div className="cart-container">
        <div className="cart-items">
          {selectedActivities.map(activity => (
            <div key={activity.id} className="cart-item">
              <div className="cart-item-icon">{activity.icon}</div>
              <div className="cart-item-details">
                <h4 className="cart-item-name">{activity.name}</h4>
                <p className="cart-item-info">
                  <span>⏱️ {activity.duration}</span>
                  <span className="cart-item-price">{activity.price}</span>
                </p>
              </div>
              <button
                className="cart-item-remove"
                onClick={() => onRemoveActivity(activity.id)}
                aria-label="Remove activity"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-total">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-price">€{totalPrice}</span>
          </div>
          <button className="cart-checkout-btn">
            Proceed to Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivityCart;

