import React, { useState } from 'react';
import '../index.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onSwitchToSignup = () => {} }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) => {
    const value =
      e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === 'email' || field === 'password') {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/auth/login',
        {
          email: form.email.trim(),
          password: form.password,
        }
      );

      if (response.status === 200) {
        const message = response?.data?.message || 'Login successful';
        const token = response?.data?.token;

        if (token) {
          localStorage.setItem('Token', token);
        }

        toast.success(message);
        navigate('/');
      }
    } catch (err) {
      console.error('Login error:', err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        'Login failed. Please try again.';

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

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
          <p className="gs-sub">
            Sign in to pick up your cart, track orders, and check your saved list.
          </p>

          <div className="gs-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={update("email")}
              autoComplete="email"
              required
            />
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
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="gs-eye-btn"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3l18 18" />
                    <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
                    <path d="M9.88 4.24A9.77 9.77 0 0 1 12 4c5 0 8.73 4.11 10 8-0.47 1.41-1.23 2.72-2.2 3.83" />
                    <path d="M6.61 6.61C4.62 7.85 3.28 9.72 2 12c1.27 3.89 5 8 10 8 1.61 0 3.09-.4 4.39-1.09" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && <p className="gs-error">{error}</p>}

          <div className="gs-row">
            <label className="gs-remember">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={update("remember")}
              />
              Remember me
            </label>

            <a className="gs-link" href="#forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="gs-cta" disabled={loading}>
            <span className="gs-cta-hole"><span /></span>
            <span className="gs-cta-label">
              {loading ? "Signing in..." : "Sign in"}
            </span>
          </button>

          <div className="gs-divider">OR</div>

          <div className="gs-social">
            <button type="button">Google</button>
            <button type="button">Apple</button>
          </div>

          <p className="gs-switch">
            New here?{" "}
            <a className="gs-link" href="#signup" onClick={onSwitchToSignup}>
              Create an account
            </a>
          </p>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
