import React, { useState } from 'react';
import Modal from 'react-modal';
import './Notes.css';

Modal.setAppElement('#root');

const Notes = () => {
  const topics = [
    { 
      title: 'Security Protocols', 
      desc: 'Learn about SSL, TLS, IPSec, and how protocols secure communication.',
      pdf: 'https://example.com/security-protocols.pdf'
    },
    { 
      title: 'Cryptographic Algorithms', 
      desc: 'Understand RSA, AES, ECC, hashing algorithms, and their use cases.',
      pdf: 'https://example.com/crypto-algorithms.pdf'
    },
    { 
      title: 'Common Attacks & Defenses', 
      desc: 'Explore phishing, SQL injection, XSS, and how to defend against them.',
      pdf: 'https://example.com/attacks-defenses.pdf'
    },
    { 
      title: 'Security Tools Overview', 
      desc: 'Intro to Nmap, Wireshark, Burp Suite, Metasploit, and more.',
      pdf: 'https://example.com/security-tools.pdf'
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPDF, setCurrentPDF] = useState('');

  const openModal = (pdf) => {
    setCurrentPDF(pdf);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentPDF('');
  };

  return (
    <div className="notes-container">
      <h1>Cybersecurity Notes</h1>
      <p>Explore detailed notes and resources on essential cybersecurity topics.</p>
      <div className="notes-cards-container">
        {topics.map((topic, index) => (
          <div className="notes-card" key={index}>
            <h3>{topic.title}</h3>
            <p>{topic.desc}</p>
            <div className="btn-group">
              <button onClick={() => openModal(topic.pdf)} className="open-btn">Open PDF</button>
              <a href={topic.pdf} download className="download-btn">Download</a>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Viewer"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <button onClick={closeModal} className="close-btn">X</button>
        <iframe 
          src={currentPDF} 
          title="PDF Preview" 
          className="pdf-frame"
        ></iframe>
        <div className="modal-btn-group">
          <a href={currentPDF} target="_blank" rel="noopener noreferrer" className="modal-open-btn">Open in New Tab</a>
          <a href={currentPDF} download className="modal-download-btn">Download</a>
        </div>
      </Modal>
    </div>
  );
};

export default Notes;
