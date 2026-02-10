import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="white" strokeWidth="2"/>
                <rect x="8" y="8" width="8" height="8" rx="2" fill="white"/>
              </svg>
            </div>
            <span className="logo-text">DevHire</span>
          </div>
          
          <div className="nav-links">
            <a href="#jobs" className="nav-link">Find Jobs</a>
            <a href="#employers" className="nav-link">For Employers</a>
          </div>

          <div className="nav-actions">
            {user ? (
              <>
                <span className="user-welcome">Welcome, {user.fullName}</span>
                <button onClick={handleLogout} className="btn-secondary">Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/login')} className="btn-secondary">Login</button>
                <button onClick={() => navigate('/signup')} className="btn-primary">Sign Up</button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Dream Job or
            <span className="hero-title-gradient"> Perfect Hire</span>
          </h1>
          <p className="hero-subtitle">
            Join millions of professionals and top companies on DevHire!
          </p>
          
          <div className="hero-actions">
            <button 
              onClick={() => navigate('/jobs')} 
              className="btn-hero-primary"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 14L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Find Jobs
            </button>
            <button 
              onClick={() => navigate('/post-job')} 
              className="btn-hero-secondary"
            >
              Post a Job
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-item">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="12" cy="10" r="4" fill="#5B52F9" opacity="0.2"/>
                <circle cx="12" cy="10" r="3" stroke="#5B52F9" strokeWidth="2"/>
                <path d="M6 24c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#5B52F9" strokeWidth="2"/>
                <circle cx="22" cy="12" r="2.5" fill="#5B52F9" opacity="0.2"/>
                <circle cx="22" cy="12" r="2" stroke="#5B52F9" strokeWidth="1.5"/>
                <path d="M19 22c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="#5B52F9" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-number">2.4M+</div>
              <div className="stat-label">Active Users</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="8" y="6" width="16" height="20" rx="2" stroke="#5B52F9" strokeWidth="2" fill="#5B52F9" opacity="0.1"/>
                <line x1="12" y1="11" x2="20" y2="11" stroke="#5B52F9" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="16" x2="18" y2="16" stroke="#5B52F9" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="21" x2="16" y2="21" stroke="#5B52F9" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Companies</div>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L20 12L28 13L22 19L24 28L16 23L8 28L10 19L4 13L12 12L16 4Z" 
                  stroke="#5B52F9" strokeWidth="2" fill="#5B52F9" opacity="0.1"/>
              </svg>
            </div>
            <div className="stat-info">
              <div className="stat-number">150K+</div>
              <div className="stat-label">Jobs Posted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Why Choose DevHire?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Smart Matching</h3>
              <p className="feature-description">
                Our AI-powered algorithm matches you with the most relevant opportunities
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Fast Application</h3>
              <p className="feature-description">
                Apply to multiple jobs with a single click using your saved profile
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure & Private</h3>
              <p className="feature-description">
                Your data is encrypted and we never share your information without consent
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3 className="feature-title">Top Companies</h3>
              <p className="feature-description">
                Connect with leading companies across various industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of professionals who found their dream jobs through DevHire
          </p>
          <button 
            onClick={() => navigate('/signup')} 
            className="btn-cta"
          >
            Get Started 
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <rect x="8" y="8" width="8" height="8" rx="2" fill="currentColor"/>
                </svg>
              </div>
              <span>DevHire</span>
            </div>
            <p className="footer-description">
              Connecting talent with opportunity since 2026
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">For Job Seekers</h4>
            <ul className="footer-links">
              <li><a href="btn-nav">Browse Jobs</a></li>
              <li><a href="#companies">Companies</a></li>
              <li><a href="#resources">Career Resources</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">For Employers</h4>
            <ul className="footer-links">
              <li><a href="#post">Post a Job</a></li>
              <li><a href="#pricing">Manage Jobs</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 JobPortal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;