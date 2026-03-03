import React, { useState } from 'react';

const Login = ({ setIsLoginOpen, setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Csak az admin adatait fogadjuk el
    if (email === 'admin@1.hu' && password === 'admin123') {
      setIsAdmin(true);
      setIsLoginOpen(false);
      setError('');
    } else {
      setError('Hibás admin adatok!');
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)' }}>
      <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '400px', padding: '40px', borderRadius: '24px', position: 'relative', border: '2px solid #000' }}>
        <button onClick={() => setIsLoginOpen(false)} style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', fontSize: '20px', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>

        <h2 style={{ textAlign: 'center', fontWeight: '900', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>Admin Belépés</h2>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="email" 
            placeholder="Admin Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none' }} 
            required 
          />
          <input 
            type="password" 
            placeholder="Jelszó" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none' }} 
            required 
          />
          
          {error && <p style={{ color: '#E31E24', fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>{error}</p>}
          
          <button 
            type="submit"
            style={{ backgroundColor: '#E31E24', color: 'white', padding: '15px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', textTransform: 'uppercase' }}
          >
            Belépés
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;