import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title slide-up">Benvinguts a Llinars del Vallès</h2>
          <p className="about-description">
            Llinars del Vallès és un poble amb encant situat al cor del Vallès Oriental, 
            a les portes del Parc Natural del Montseny. Amb una rica història que es remunta 
            a l'època romana, el poble ofereix un perfecte equilibri entre patrimoni històric 
            i bellesa natural.
          </p>
          <p className="about-description">
            Descobreix la <strong>Torrassa del Moro</strong>, una torre de defensa d'origen romà 
            amb vistes privilegiades, explora el <strong>Castellnou de Llinars</strong>, un castell 
            renaixentista del segle XVI, o gaudeix de les rutes de senderisme que travessen 
            el Montseny i la Serra del Corredor.
          </p>
        </div>
        <div className="about-features">
          <div className="feature-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="feature-icon-wrapper">
              <div className="feature-number">01</div>
              <div className="feature-icon-circle"></div>
            </div>
            <h3>Patrimoni Històric</h3>
            <p>Torres, castells i esglésies romàniques que testimonien la rica història del poble</p>
          </div>
          <div className="feature-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="feature-icon-wrapper">
              <div className="feature-number">02</div>
              <div className="feature-icon-circle"></div>
            </div>
            <h3>Natura</h3>
            <p>Rutes pel Montseny i Serra del Corredor que connecten amb la bellesa natural</p>
          </div>
          <div className="feature-card fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="feature-icon-wrapper">
              <div className="feature-number">03</div>
              <div className="feature-icon-circle"></div>
            </div>
            <h3>Tradicions</h3>
            <p>Recollida de bolets i festes locals que mantenen viva la cultura catalana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

