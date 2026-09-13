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
          grid-template-columns: 1fr 1.15fr;
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
          animation: gsScroll 32s linear infinite;
        }
        @keyframes gsScroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .gs-tag {
          position: relative;
          background: var(--surface);
          border-radius: 3px;
          padding: 16px 18px 14px 22px;
          width: 236px;
          box-shadow: 0 8px 18px rgba(20, 16, 50, 0.18);
        }
        .gs-tag:nth-child(odd) { transform: rotate(-1.6deg); }
        .gs-tag:nth-child(even) { transform: rotate(1.2deg); margin-left: 28px; }
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
        }
        .gs-card {
          position: relative;
          width: 100%;
          max-width: 400px;
          background: var(--surface);
          border-radius: 4px;
          border: 1px solid var(--line);
          padding: 44px 40px 36px;
        }
        .gs-card::before {
          content: "";
          position: absolute;
          top: 26px;
          left: -1px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--paper);
          border: 1.5px solid var(--line);
          box-shadow: 18px 0 0 -6px var(--paper);
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
          font-size: 30px;
          line-height: 1.15;
          margin: 0 0 10px;
        }
        .gs-sub {
          font-size: 14.5px;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0 0 30px;
          max-width: 34ch;
        }
        .gs-field { margin-bottom: 18px; }
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
        .gs-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          font-size: 13.5px;
        }
        .gs-remember { display: flex; align-items: center; gap: 7px; color: var(--ink-soft); }
        .gs-remember input { accent-color: var(--indigo); }
        .gs-link { color: var(--indigo); text-decoration: none; font-weight: 600; }
        .gs-link:hover { text-decoration: underline; }
        .gs-error {
          font-size: 13px;
          color: var(--error);
          margin: -6px 0 16px;
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

        .gs-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 26px 0 18px;
          color: var(--ink-soft);
          font-size: 12.5px;
        }
        .gs-divider::before, .gs-divider::after {
          content: "";
          flex: 1;
          height: 1px;
          background: var(--line);
        }
        .gs-social { display: flex; gap: 10px; margin-bottom: 26px; }
        .gs-social button {
          flex: 1;
          padding: 10px;
          border: 1px solid var(--line);
          border-radius: 3px;
          background: var(--surface);
          font-size: 13.5px;
          font-weight: 500;
          color: var(--ink);
          cursor: pointer;
          transition: border-color 0.15s ease;
        }
        .gs-social button:hover { border-color: var(--indigo); }
        .gs-switch { text-align: center; font-size: 14px; color: var(--ink-soft); }

        @media (prefers-reduced-motion: reduce) {
          .gs-track { animation: none; }
        }
        @media (max-width: 860px) {
          .gs-auth { grid-template-columns: 1fr; }
          .gs-wall { display: none; }
          .gs-panel { padding: 28px 20px; }
        }
      `}</style>

      <aside className="gs-wall">
        <div className="gs-wall-brand">
          {/* <ShoppingBag /> */}
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

      <main className="gs-panel">
        <form className="gs-card" onSubmit={handleSubmit}>
          <p className="gs-eyebrow">LOGIN</p>
          <h1 className="gs-heading">Good to see you again</h1>
          <p className="gs-sub">Sign in to pick up your cart, track orders, and check your saved list.</p>

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
                placeholder="••••••••"
                value={form.password}
                onChange={update("password")}
              />
              <button type="button" className="gs-eye-btn" onClick={() => setShowPassword((s) => !s)} aria-label="Toggle password visibility">
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {error && <p className="gs-error">{error}</p>}

          <div className="gs-row">
            <label className="gs-remember">
              <input type="checkbox" checked={form.remember} onChange={update("remember")} />
              Remember me
            </label>
            <a className="gs-link" href="#forgot">Forgot password?</a>
          </div>

          <button type="submit" className="gs-cta">
            <span className="gs-cta-hole"><span /></span>
            <span className="gs-cta-label">Sign in</span>
          </button>

     

          <p className="gs-switch">
            New here?{" "}
            <a className="gs-link" href="#signup" onClick={onSwitchToSignup}>Create an account</a>
          </p>
        </form>
      </main>
    </div>
