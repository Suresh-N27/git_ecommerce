import React, { useContext } from "react";
import { ShoppingBag, LogOut } from "lucide-react";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Header() {

      const {Setuserdata,userdata} = useContext(userContext)

  
  const initial = userdata?.name?.charAt(0)?.toUpperCase();
   let navigate = useNavigate()

    const onLogout = () =>{
      localStorage.removeItem('Token')
      navigate('/login')
    }

  return (
    <header className="gs-header">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;500;600&display=swap');

        .gs-header {
          --paper: #F6F4EE;
          --surface: #FFFFFF;
          --ink: #201E29;
          --ink-soft: #6B6878;
          --indigo: #463B8C;
          --indigo-dark: #332B66;
          --mustard: #D9A441;
          --line: #DDD8C8;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 32px;
          background: var(--surface);
          border-bottom: 1px dashed var(--line);
          font-family: 'Inter', sans-serif;
          color: var(--ink);
        }
        .gs-header *, .gs-header *::before, .gs-header *::after { box-sizing: border-box; }

        .gs-header-brand {
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .gs-header-brand svg {
          width: 22px;
          height: 22px;
          color: var(--mustard);
          background: var(--indigo);
          border-radius: 4px;
          padding: 4px;
          box-sizing: content-box;
        }
        .gs-header-brand span {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 19px;
          letter-spacing: 0.02em;
          color: var(--ink);
        }

        .gs-header-user {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .gs-header-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--indigo);
          color: var(--paper);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }
        .gs-header-greeting {
          font-size: 14px;
          color: var(--ink-soft);
          white-space: nowrap;
        }
        .gs-header-greeting strong {
          color: var(--ink);
          font-weight: 600;
        }
        .gs-header-divider {
          width: 1px;
          height: 22px;
          background: var(--line);
        }
        .gs-header-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 3px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--ink);
          cursor: pointer;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .gs-header-logout svg { width: 15px; height: 15px; }
        .gs-header-logout:hover {
          border-color: var(--indigo);
          color: var(--indigo);
        }

        @media (max-width: 560px) {
          .gs-header { padding: 12px 16px; }
          .gs-header-greeting { display: none; }
        }
      `}</style>

      <div className="gs-header-brand">
        <ShoppingBag />
        <span>GOODSTOCK</span>
      </div>

      <div className="gs-header-user">
        <div className="gs-header-avatar">{initial}</div>
        <span className="gs-header-greeting">
          Welcome, <strong>{userdata.name}</strong>
        </span>
        <span className="gs-header-divider" />
        <button type="button" className="gs-header-logout" onClick={onLogout}>
          <LogOut />
          Logout
        </button>
      </div>
    </header>
  );
}