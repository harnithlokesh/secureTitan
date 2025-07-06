import React from 'react';
import './Home.css';

const Home = () => {
 return (
    <div className="home-container">
     <h1 className="hero-heading" style={{ color: '#D3A4F3'}}>
    Welcome to SecureTitan
    </h1>
      <p>Your cybersecurity knowledge hub and future consultancy partner 🛡️</p>

      <div className="cards-container">
        <div className="card">
          <h3>Cybersecurity Notes</h3>
          <p>Access detailed notes on core cybersecurity topics.</p>
        </div>
        <div className="card coming-soon">
          <h3>Application Security</h3>
          <p>Coming soon</p>
        </div>
        <div className="card coming-soon">
          <h3>Cloud Security</h3>
          <p>Coming soon</p>
        </div>
        <div className="card coming-soon">
          <h3>Incident Response</h3>
          <p>Coming soon</p>
        </div>
        <div className="card coming-soon">
          <h3>Governance & Compliance</h3>
          <p>Coming soon</p>
        </div>
        <div className="card coming-soon">
          <h3>Penetration Testing</h3>
          <p>Coming soon</p>
        </div>
      </div>

      <div className="notes-section">
        <h2>Cybersecurity Notes</h2>
        <p>We are building an in-depth notes repository covering various domains such as network security, encryption, incident response, and more. Stay tuned!</p>
      </div>
    </div>
  );
};

export default Home;
