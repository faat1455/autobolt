import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const linkStyle = {
    color: '#6c757d',
    textDecoration: 'none',
    padding: '0 15px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontSize: '15px'
  };

  return (
    <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #dee2e6', padding: '30px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '30px', padding: 0, marginBottom: '15px' }}>
          <li><button onClick={() => navigate('/home')} style={linkStyle}>Főoldal</button></li>
          <li><button onClick={() => navigate('/contact')} style={linkStyle}>Kapcsolatfelvétel</button></li>
          <li><button onClick={() => navigate('/about')} style={linkStyle}>Rólunk</button></li>
        </ul>
        <div style={{ borderBottom: '1px solid #eee', width: '60%', margin: '0 auto 15px auto' }}></div>
        <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>© 2025 Company, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;