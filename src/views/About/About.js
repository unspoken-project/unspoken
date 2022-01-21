import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <>
      <header>
        <Link to="/" className="home-btn">
          Home
        </Link>
      </header>
      <div className="about-cards">
        <div className="ryssa-card">
          <img src="../../ryssa.jpg" />
          <h3>Ryssa</h3>
          <p>this is words about Karyssa.</p>
          <a href="https://github.com/karyssa-dandrea" target="_blank" rel="noreferrer">
            <img className="link-img" src="../../Octocat.png" />
          </a>
          <a href="https://www.linkedin.com/in/karyssa-dandrea/" target="_blank" rel="noreferrer">
            <img className="link-img" src="../../linkedin.png" />
          </a>
        </div>

        <div className="ian-card">
          <img src="../../ian.png" />
          <h3>Ian</h3>
          <p>this is words about Ian.</p>
          <a href="https://github.com/ian-christiansen" target="_blank" rel="noreferrer">
            <img className="link-img" src="../../Octocat.png" />
          </a>
          <a href="https://www.linkedin.com/in/ianchristiansen/" target="_blank" rel="noreferrer">
            <img className="link-img" src="../../linkedin.png" />
          </a>
        </div>

        <div className="mira-card">
          <img src="../../mira.jpeg" />
          <h3>Mira</h3>
          <p>this is words about Mira.</p>
          <a href="https://github.com/mira-kine" target="_blank" rel="noreferrer">
            <img className="link-img" src="../../Octocat.png" />
          </a>
          <a href="https://www.linkedin.com/in/mira-kinebuchi/" target="_blank" rel="noreferrer">
            <img className="link-img" src="../../linkedin.png" />
          </a>
        </div>

        <div className="indy-card">
          <img src="../../indy.jpg" />
          <h3>Indy</h3>
          <p>this is words about Indy.</p>
          <a href="https://github.com/H-Indiana-Holdsworth" target="_blank" rel="noreferrer">
            <img className="link-img" src="../../Octocat.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/h-indiana-holdsworth/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="link-img" src="../../linkedin.png" />
          </a>
        </div>
      </div>
    </>
  );
}
