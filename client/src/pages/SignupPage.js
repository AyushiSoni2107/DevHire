import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AuthPages.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'jobseeker'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleRoleChange = (role) => {
    setFormData({
      ...formData,
      role
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    const result = await signup({
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      role: formData.role
    });
    
    if (result.success) {
      navigate('/login');
    } else {
      setError(result.message || 'Signup failed. Please try again.');
    }
    
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Logo */}
        <div className="auth-header">
          <div className="auth-logo" onClick={() => navigate('/')}>
            <div className="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="white" strokeWidth="2"/>
                <rect x="8" y="8" width="8" height="8" rx="2" fill="white"/>
              </svg>
            </div>
            <span className="logo-text">DevHire</span>
          </div>
          <div className="auth-nav">
            <button onClick={() => navigate('/')} className="btn-nav">Browse Jobs</button>
            <button onClick={() => navigate('/login')} className="btn-nav">Login</button>
            <button onClick={() => navigate('/signup')} className="btn-nav-primary active">Sign Up</button>
          </div>
        </div>

        {/* Signup Form Card */}
        <div className="auth-card signup-card">
          <div className="auth-card-header">
            <div className="auth-avatar">
              <span>DH</span>
            </div>
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join our DevHire community today</p>
          </div>

          {error && (
            <div className="error-message">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 6V10M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Role Selection */}
            <div className="form-group">
              <label className="form-label">I am a</label>
              <div className="role-selector">
                <button
                  type="button"
                  className={`role-btn ${formData.role === 'jobseeker' ? 'active' : ''}`}
                  onClick={() => handleRoleChange('jobseeker')}
                >
                  Job Seeker
                </button>
                <button
                  type="button"
                  className={`role-btn ${formData.role === 'employer' ? 'active' : ''}`}
                  onClick={() => handleRoleChange('employer')}
                >
                  Employer
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="form-input"
              />
            </div>

            <button 
              type="submit" 
              className="btn-submit"
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner">Creating account...</span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;