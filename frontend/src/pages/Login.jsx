import React, { useState } from 'react';
import '../index.css'; // Import the CSS file
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let response = await axios.post('http://localhost:5000/auth/login',
          {email,password})
          if(response.status == 200){
            toast.success(response?.data?.message)
            navigate('/')
            localStorage.setItem('Token',response?.data?.token)
          }
    } catch (error) {
      console.log('error',error)
      toast.error(error.response?.data?.message)
    }
  };

  return (
    <div className="auth-container login-wrapper">
      {/* Left Side: Image */}
      <div className="login-image-side">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
          alt="Fashion Lifestyle" 
        />
        <div className="login-overlay-text">
          <h2 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>Welcome Back</h2>
          <p style={{ margin: 0, color: '#4b5563' }}>
            Discover the latest trends and exclusive offers tailored just for you.
          </p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="login-form-side">
        <div style={{ width: '100%', maxWidth: '400px' }}>
          
          <div className="form-header">
            <h1>Sign In</h1>
            <p>
              Or <a href="/signup" className="link-text">create a new account</a>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                {/* Mail Icon SVG */}
                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="password" 
                  className="form-input" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <label className="checkbox-group" style={{ margin: 0 }}>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="link-text" style={{ fontSize: '0.875rem' }}>Forgot password?</a>
            </div>

            <button type="submit" className="btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;