<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { ShoppingBag, Shirt, Coffee, Watch, Lamp, Eye, EyeOff, Check } from "lucide-react";
import axios from 'axios'
import toast from 'react-hot-toast'



export default function Signup({ onSwitchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", agree: false });
  const [error, setError] = useState("");

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Fill in your name, email, and password to continue.");
      return;
    }
    if (!form.agree) {
      setError("You need to agree to the terms to create an account.");
      return;
    }
    setError("");

      try {
          const response = await axios.post('http://localhost:5000/auth/register',
        {name:form.name,email:form.email,password:form.password})
        toast.success(response.data.message)
      } catch (error) {
         if (error.response) {
      toast.error(
        error.response.data.message || `Error ${error.response.status}`
      )
    } else {
      toast.error('Unable to connect to server')
    }
      }
    
    
  };

  // const track = [...TAGS, ...TAGS];

  return (
    <div className="gs-auth">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

        .gs-auth {
          --paper: #F6F4EE;
          --surface: #FFFFFF;
          --ink: #201E29;
          --ink-soft: #6B6878;
          --indigo: #463B8C;
          --indigo-dark: #332B66;
          --mustard: #D9A441;
          --mustard-dark: #B9822B;
          --line: #DDD8C8;
          --error: #B23A31;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
        }
        .gs-auth *, .gs-auth *::before, .gs-auth *::after { box-sizing: border-box; }

        .gs-wall {
          position: relative;
          background: var(--indigo);
          overflow: hidden;
          padding: 48px 0;
          order: 2;
        }
        .gs-wall::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0);
          background-size: 22px 22px;
          pointer-events: none;
        }
        .gs-wall-brand {
          position: relative;
          z-index: 2;
          padding: 0 40px 32px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--paper);
        }
        .gs-wall-brand svg { width: 22px; height: 22px; color: var(--mustard); }
        .gs-wall-brand span {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.02em;
        }
        .gs-track-wrap {
          position: relative;
          height: calc(100% - 70px);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
        }
        .gs-track {
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding: 0 40px;
          animation: gsScrollRev 34s linear infinite;
        }
        @keyframes gsScrollRev {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .gs-tag {
          position: relative;
          background: var(--surface);
          border-radius: 3px;
          padding: 16px 18px 14px 22px;
          width: 236px;
          box-shadow: 0 8px 18px rgba(20, 16, 50, 0.18);
        }
        .gs-tag:nth-child(odd) { transform: rotate(1.4deg); margin-left: 28px; }
        .gs-tag:nth-child(even) { transform: rotate(-1.8deg); }
        .gs-tag-hole {
          position: absolute;
          top: 10px;
          left: 8px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--paper);
          border: 1.5px solid var(--ink-soft);
        }
        .gs-tag-top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .gs-tag-top svg { width: 15px; height: 15px; color: var(--indigo); }
        .gs-tag-name { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 14.5px; }
        .gs-tag-cat { font-size: 11.5px; color: var(--ink-soft); margin: 0 0 8px; }
        .gs-tag-price {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          font-weight: 500;
          color: var(--mustard-dark);
        }

        .gs-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          order: 1;
        }
        .gs-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: var(--surface);
          border-radius: 4px;
          border: 1px solid var(--line);
          padding: 40px 40px 12px;
        }
        .gs-card::before {
          content: "";
          position: absolute;
          top: 26px;
          right: -1px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--paper);
          border: 1.5px solid var(--line);
        }
        .gs-eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--mustard-dark);
          margin: 0 0 14px;
        }
        .gs-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 28px;
          line-height: 1.15;
          margin: 0 0 10px;
        }
        .gs-sub {
          font-size: 14.5px;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0 0 22px;
          max-width: 36ch;
        }
        .gs-perks {
          list-style: none;
          margin: 0 0 26px;
          padding: 14px 16px;
          background: var(--paper);
          border: 1px dashed var(--line);
          border-radius: 3px;
        }
        .gs-perks li {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          padding: 5px 0;
        }
        .gs-perks li + li { border-top: 1px dashed var(--line); }
        .gs-perks svg { width: 14px; height: 14px; color: var(--indigo); flex-shrink: 0; }
        .gs-perk-code {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: var(--mustard-dark);
          margin-left: auto;
        }

        .gs-field { margin-bottom: 16px; }
        .gs-field label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .gs-input-wrap { position: relative; }
        .gs-field input {
          width: 100%;
          padding: 11px 13px;
          font-size: 14.5px;
          font-family: 'Inter', sans-serif;
          border: 1px solid var(--line);
          border-radius: 3px;
          background: var(--paper);
          color: var(--ink);
          outline: none;
          transition: border-color 0.15s ease;
        }
        .gs-field input:focus-visible {
          border-color: var(--indigo);
          box-shadow: 0 0 0 3px rgba(70, 59, 140, 0.15);
        }
        .gs-eye-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          padding: 4px;
          color: var(--ink-soft);
          cursor: pointer;
          display: flex;
        }
        .gs-eye-btn svg { width: 17px; height: 17px; }
        .gs-terms {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 13px;
          color: var(--ink-soft);
          margin: 6px 0 18px;
          line-height: 1.5;
        }
        .gs-terms input { margin-top: 3px; accent-color: var(--indigo); }
        .gs-link { color: var(--indigo); text-decoration: none; font-weight: 600; }
        .gs-link:hover { text-decoration: underline; }
        .gs-error {
          font-size: 13px;
          color: var(--error);
          margin: -4px 0 16px;
        }
        .gs-cta {
          width: 100%;
          display: flex;
          align-items: center;
          background: var(--indigo);
          color: var(--paper);
          border: none;
          border-radius: 3px;
          padding: 0;
          cursor: pointer;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 15px;
          overflow: hidden;
          transition: background 0.15s ease;
        }
        .gs-cta:hover { background: var(--indigo-dark); }
        .gs-cta-hole {
          width: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1.5px dashed rgba(246,244,238,0.4);
          align-self: stretch;
        }
        .gs-cta-hole span {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--mustard);
        }
        .gs-cta-label { flex: 1; padding: 14px 0; text-align: center; }

        .gs-switch {
          text-align: center;
          font-size: 14px;
          color: var(--ink-soft);
          padding: 22px 0 26px;
        }

        @media (prefers-reduced-motion: reduce) {
          .gs-track { animation: none; }
        }
        @media (max-width: 860px) {
          .gs-auth { grid-template-columns: 1fr; }
          .gs-wall { display: none; }
          .gs-panel { padding: 28px 20px; order: 1; }
        }
      `}</style>

      <main className="gs-panel">
        <form className="gs-card" onSubmit={handleSubmit}>
          <p className="gs-eyebrow">Signup</p>
          <h1 className="gs-heading">Start your tab</h1>
          <p className="gs-sub">Create an account to check out faster and track every order.</p>

    

          <div className="gs-field">
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" placeholder="Alex Rivera" value={form.name} onChange={update("name")} />
          </div>

          <div className="gs-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={update("email")} />
          </div>

          <div className="gs-field">
            <label htmlFor="password">Password</label>
            <div className="gs-input-wrap">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                value={form.password}
                onChange={update("password")}
              />
              <button type="button" className="gs-eye-btn" onClick={() => setShowPassword((s) => !s)} aria-label="Toggle password visibility">
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <label className="gs-terms">
            <input type="checkbox" checked={form.agree} onChange={update("agree")} />
            <span>I agree to the <a className="gs-link" href="#terms">Terms of Service</a> and <a className="gs-link" href="#privacy">Privacy Policy</a>.</span>
          </label>

          {error && <p className="gs-error">{error}</p>}

          <button type="submit" className="gs-cta">
            <span className="gs-cta-hole"><span /></span>
            <span className="gs-cta-label">Create account</span>
          </button>

          <p className="gs-switch">
            Already have an account?{" "}
            <a className="gs-link" href="#login" onClick={onSwitchToLogin}>Sign in</a>
          </p>
        </form>
      </main>

      <aside className="gs-wall">
        <div className="gs-wall-brand">
          <ShoppingBag />
          <span>GOODSTOCK</span>
        </div>
        <div className="gs-track-wrap">
          <div className="gs-track">
            {/* {track.map((t, i) => {
              const Icon = t.icon;
              return (
                <div className="gs-tag" key={i}>
                  <span className="gs-tag-hole" />
                  <div className="gs-tag-top">
                    <Icon />
                  </div>
                  <p className="gs-tag-name">{t.name}</p>
                  <p className="gs-tag-cat">{t.cat}</p>
                  <p className="gs-tag-price">{t.price}</p>
                </div>
              );
            })} */}
          </div>
        </div>
      </aside>
    </div>
  );
}
>>>>>>> e800080 (connect user to header)
