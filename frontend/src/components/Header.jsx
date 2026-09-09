    import React from 'react';

const Header = ({ userName, onLogout }) => {
  // Default values if props aren't passed yet
  const name = userName || "Guest";
  
  return (
    <>
      {/* --- INTERNAL STYLES --- */}
      <style>{`
        .app-header {
          background-color: #ffffff;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo Section */
        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: #111827;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          cursor: pointer;
        }

        .logo-icon-bg {
          background-color: #4f46e5; /* Indigo */
          color: white;
          padding: 6px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Navigation Links (Desktop) */
        .nav-links {
          display: none;
          gap: 2rem;
        }

        .nav-item {
          text-decoration: none;
          color: #4b5563;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
        }

        .nav-item:hover {
          color: #4f46e5;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        /* Right Side Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* Cart Button */
        .cart-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          color: #4b5563;
          padding: 5px;
          transition: color 0.2s;
        }

        .cart-btn:hover {
          color: #4f46e5;
        }

        .cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background-color: #ef4444;
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
        }

        /* User Section */
        .user-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-left: 1px solid #e5e7eb;
          padding-left: 1.5rem;
        }

        .user-name {
          font-weight: 600;
          color: #111827;
          font-size: 0.9rem;
        }

        .logout-btn {
          background-color: transparent;
          border: 1px solid #d1d5db;
          color: #4b5563;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .logout-btn:hover {
          background-color: #fee2e2;
          color: #b91c1c;
          border-color: #fecaca;
        }
      `}</style>

      {/* --- HEADER HTML --- */}
      <header className="app-header">
        <div className="header-container">
          
          {/* 1. App Name / Logo */}
          <div className="logo-area">
            <div className="logo-icon-bg">
              {/* Shopping Bag Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <span>ShopLite</span>
          </div>

          {/* 2. Navigation Links */}
          <nav className="nav-links">
            <a href="#home" className="nav-item">Home</a>
            <a href="#new" className="nav-item">New Arrivals</a>
            <a href="#categories" className="nav-item">Categories</a>
            <a href="#sale" className="nav-item">Sale</a>
          </nav>

          {/* 3. Right Side: Cart & User */}
          <div className="header-actions">
            
            {/* Cart Icon */}
            <button className="cart-btn" aria-label="View Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              <span className="cart-badge">3</span>
            </button>

            {/* User Info & Logout */}
            <div className="user-section">
              <span className="user-name">Hi, {name}</span>
              <button className="logout-btn" onClick={onLogout}>
                Logout
              </button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;