import React, { useEffect, useRef, useState } from 'react';
import TitanImage from './TitanImage';
import TitanAbout from './TitanAbout';
import './About.css';

const About = () => {
  const founderRef = useRef();
  const cofounderRef = useRef();
  const [founderVisible, setFounderVisible] = useState(false);
  const [cofounderVisible, setCofounderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (founderRef.current) {
        const founderTop = founderRef.current.getBoundingClientRect().top;
        const founderBottom = founderRef.current.getBoundingClientRect().bottom;
        setFounderVisible(founderTop < windowHeight - 100 && founderBottom > 100);
      }

      if (cofounderRef.current) {
        const cofounderTop = cofounderRef.current.getBoundingClientRect().top;
        const cofounderBottom = cofounderRef.current.getBoundingClientRect().bottom;
        setCofounderVisible(cofounderTop < windowHeight - 100 && cofounderBottom > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-container">
      <h1>About secureTitan</h1>
      <p>
        The digital realm constantly expands, making robust cybersecurity proficiency indispensable.
        Yet, navigating its complexities often feels like deciphering a foreign language, riddled with technical terms that discourage many.
        This challenge is precisely why secureTitan was founded.
        <br /><br />
        Our core conviction at secureTitan is that understanding cybersecurity shouldn't be an exclusive pursuit. We believe it must be clear, actionable, and within reach for everyone – from curious newcomers and students to seasoned professionals seeking to sharpen their edge. Our mission centers on distilling intricate security concepts into concise, easily absorbable notes, designed for rapid comprehension and lasting recall.
        <br /><br />
        We meticulously cover a broad spectrum of cybersecurity domains, from fundamental principles to cutting-edge advancements. Each topic is disassembled into brief, visually engaging, and logically structured summaries. These resources are engineered to help you quickly grasp essential ideas, building a solid informational bedrock without getting lost in an ocean of technical specifics.
        <br /><br />
        secureTitan is more than just a repository of notes; it's a vibrant learning ecosystem. We champion intellectual curiosity and continuous skill development. Our aim is to empower individuals to remain current and secure, recognizing that in today's digitally driven world, knowledge isn't merely advantageous—it's foundational protection.
        <br /><br />
        Join our movement to revolutionize how cybersecurity is learned, making it simpler, more approachable, and profoundly more engaging. Explore, deepen your understanding, and become a formidable presence in security with secureTitan.
      </p>

      <h2 className="section-title">
        Meet our{' '}
        <span className="titans-text">
          {'TITANS'.split('').map((letter, idx) => (
            <span key={idx} className={`scanner-letter letter-${idx}`}>
              {letter}
            </span>
          ))}
        </span>
      </h2>

      <div ref={founderRef} className="titan-section">
        <TitanImage
          src="https://via.placeholder.com/300x200.png?text=Founder+Photo"
          alt="Founder"
        />
        <TitanAbout
          name="Harnith Lokesh"
          description="Founder of secureTitan. Passionate about simplifying cybersecurity and empowering learners worldwide to become cyber-resilient."
          visible={founderVisible}
        />
      </div>

      <div ref={cofounderRef} className="titan-section">
        <TitanImage
          src="https://via.placeholder.com/300x200.png?text=Co-Founder+Photo"
          alt="Co-founder"
        />
        <TitanAbout
          name="Co-founder Name"
          description="Co-founder at secureTitan. Dedicated to creating impactful learning experiences and shaping the future of cyber education."
          visible={cofounderVisible}
        />
      </div>
    </div>
  );
};

export default About;
