import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-cards">
      <div className="ryssa-card">
        <img src="../../ryssa.jpg" />

        <p>this is words about Karyssa.</p>
      </div>
      <div className="ian-card">this is words about Ian.</div>
      <div className="mira-card">this is words about Mira.</div>
      <div className="indy-card">
        <img src="../../indy.jpg" />
        <p>this is words about Indy.</p>
      </div>
    </div>
  );
}
