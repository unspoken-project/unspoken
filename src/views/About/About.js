import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <>
      <div className="cards-container">
        <div className="profile-card">
          <img src="../../ryssa.jpg" />
          <h3>Ryssa</h3>
          <p>Karyssa is a full stack software engineer and is super cool.</p>
          <span>
            <a href="https://github.com/karyssa-dandrea" target="_blank" rel="noreferrer">
              <img className="link-img" src="../../Octocat.png" />
            </a>
            <a href="https://www.linkedin.com/in/karyssa-dandrea/" target="_blank" rel="noreferrer">
              <img className="link-img" src="../../linkedin.png" />
            </a>
          </span>
        </div>

        <div className="profile-card">
          <img src="../../ian.png" />
          <h3>Ian</h3>
          <p>
            Ian is a web developer in Reno, NV. Drawn to and inspired by storytelling, this project
            is a natural extension of his curiosity and love of human connection.
          </p>
          <span>
            <a href="https://github.com/ian-christiansen" target="_blank" rel="noreferrer">
              <img className="link-img" src="../../Octocat.png" />
            </a>
            <a href="https://www.linkedin.com/in/ianchristiansen/" target="_blank" rel="noreferrer">
              <img className="link-img" src="../../linkedin.png" />
            </a>
          </span>
        </div>

        <div className="profile-card">
          <img src="https://ipvfiyhmiwmzfnzlbhov.supabase.in/storage/v1/object/public/unspoken/Image from iOS.jpg" />
          <h3>Mira</h3>
          <p>
            Mira is a full stack software developer and loves connecting with others through
            stories. Her first journal entry ever was &quot;I hope I get a dog one day&quot;.
          </p>
          <span>
            <a href="https://github.com/mira-kine" target="_blank" rel="noreferrer">
              <img className="link-img" src="../../Octocat.png" />
            </a>
            <a href="https://www.linkedin.com/in/mira-kinebuchi/" target="_blank" rel="noreferrer">
              <img className="link-img" src="../../linkedin.png" />
            </a>
          </span>
        </div>

        <div className="profile-card">
          <img src="https://ipvfiyhmiwmzfnzlbhov.supabase.in/storage/v1/object/public/unspoken/indy.jpg" />
          <h3>Indy</h3>
          <p>Indy is full stack software engineer and an avid journaler/memoir writer.</p>
          <span>
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
          </span>
        </div>
      </div>
      <div className="about-nav">
        <Link to="/" className="home-btn">
          Return Home
        </Link>
      </div>
    </>
  );
}
