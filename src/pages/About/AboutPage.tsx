import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-content">
          <h1>About BStudy</h1>
          <p className="hero-subtitle">Empowering learners worldwide with accessible, quality education</p>
        </div>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              At BStudy, we believe that education should be accessible to everyone, regardless of their 
              background or circumstances. Our mission is to provide high-quality, professional education 
              that empowers individuals to achieve their career goals and unlock their full potential.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  </svg>
                </div>
                <h3>Excellence</h3>
                <p>We maintain the highest standards in our course content and delivery methods.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>
                </div>
                <h3>Community</h3>
                <p>We foster a supportive learning community where students can grow together.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>We continuously innovate our learning methods to provide the best educational experience.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>
                  BStudy was founded in 2023 with a simple yet powerful vision: to democratize access to 
                  professional education. What started as a small team of educators and technologists has 
                  grown into a comprehensive learning platform serving thousands of students worldwide.
                </p>
                <p>
                  We understand the challenges that professionals face in today's rapidly evolving job market. 
                  That's why we've created a platform that offers flexible, practical, and industry-relevant 
                  courses designed to help you stay ahead of the curve.
                </p>
              </div>
              <div className="story-stats">
                <div className="stat-item">
                  <h3>10,000+</h3>
                  <p>Active Students</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Courses Available</p>
                </div>
                <div className="stat-item">
                  <h3>95%</h3>
                  <p>Completion Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3>Dr. Sarah Johnson</h3>
                <p className="member-role">Founder & CEO</p>
                <p className="member-bio">
                  Former university professor with 15+ years in educational technology and curriculum development.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3>Michael Chen</h3>
                <p className="member-role">CTO</p>
                <p className="member-bio">
                  Tech leader with expertise in scalable learning platforms and AI-driven education solutions.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3>Emily Rodriguez</h3>
                <p className="member-role">Head of Content</p>
                <p className="member-bio">
                  Curriculum specialist with a passion for creating engaging, practical learning experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of learners who are already transforming their careers with BStudy.</p>
            <div className="cta-buttons">
              <button className="cta-primary">Explore Courses</button>
              <button className="cta-secondary">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage; 