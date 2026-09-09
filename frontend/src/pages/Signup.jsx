import React, { useState } from 'react';
import '../index.css'; // Import the CSS file
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        let response = await axios.post('http://localhost:5000/auth/register',
          {email:formData.email,
            password:formData.password,
            name:formData.name,
          })
          if(response.status == 200){
            toast.success(response?.data?.message)
            navigate('/login')
          }
    
    } catch (error) {
      console.log('error',error)
      toast.error(error.response?.data?.message)
    }
  };

  return (
    <div className="auth-container signup-wrapper">
      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div style={{ textAlign: 'center', marginBottom: '2rem', zIndex: 10 }}>
        {/* Logo Icon */}
        <div style={{ 
          display: 'inline-flex', 
          backgroundColor: '#4f46e5', 
          padding: '12px', 
          borderRadius: '12px', 
          marginBottom: '1.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </div>
        
        <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', margin: 0 }}>Create Account</h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Start your shopping journey with us</p>
      </div>

      <div className="signup-card">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-wrapper">
              {/* User Icon SVG */}
              <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <input 
                name="name"
                type="text" 
                className="form-input" 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-wrapper">
              {/* Mail Icon SVG */}
              <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <input 
                name="email"
                type="email" 
                className="form-input" 
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
              {/* Lock Icon SVG */}
              <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <input 
                name="password"
                type="password" 
                className="form-input" 
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

       

          <div className="checkbox-group">
            <input type="checkbox" required />
            <span>I agree to the <a href="#" className="link-text">Terms</a> and <a href="#" className="link-text">Privacy Policy</a></span>
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            Already have an account? <a href="/login" className="link-text">Sign in instead</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;