import React from 'react';

const Contact = () => {
  // Modern, fekete SVG ikonok (tisztább és élesebb, mint az emojik)
  const icons = {
    location: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    phone: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    mail: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    web: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    clock: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '60px 20px',
      backgroundColor: '#e5e5e5', 
      minHeight: '100vh',
      fontFamily: 'sans-serif'
    }}>
      {/* CÍMSZOR */}
      <h1 style={{ 
        fontSize: '48px', 
        fontWeight: '900', 
        marginBottom: '40px', 
        color: '#000',
        textTransform: 'none'
      }}>
        Kapcsolatfelvétel
      </h1>

      {/* KONTAKT PANEL */}
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        maxWidth: '900px', 
        backgroundColor: 'white', 
        border: '1px solid #000',
        overflow: 'hidden',
        height: '600px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        
        {/* BAL OLDAL: ADATOK */}
        <div style={{ 
          flex: 1, 
          padding: '60px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          gap: '35px'
        }}>
          {/* Helyszín */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {icons.location}
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>
              4030 Debrecen,<br />Local utca 12
            </div>
          </div>

          {/* Telefon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {icons.phone}
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>
              +36 20 123 456
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {icons.mail}
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>
              info@localhost.com
            </div>
          </div>

          {/* Web */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {icons.web}
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>
              www.localhost.com
            </div>
          </div>

          {/* Nyitvatartás */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {icons.clock}
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>
              H-P: 07:00-18:00<br />
              SZ-V: 09:00-16:00
            </div>
          </div>
        </div>

        {/* JOBB OLDAL: AUTÓ KÉP (HÁTRÉBB POZÍCIONÁLVA) */}
        <div style={{ 
          flex: 1, 
          position: 'relative',
          backgroundColor: '#fff',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center'
        }}>
          <img 
            src="https://bmw.scene7.com/is/image/BMW/g45_ice_mp_ext_m-sport-package-pro_shfv?qlt=80&wid=1024&fmt=webp" 
            alt="Grey BMW"
            style={{
              width: '135%', // Kisebb szélesség = távolabbi autó
              height: '100%',
              objectFit: 'contain', 
              objectPosition: 'center', // Középre igazítva, hogy legyen hely előtte/mögötte
              transform: 'scale(1.1)', // Finom nagyítás a keret kitöltéséhez
              filter: 'drop-shadow(-10px 10px 20px rgba(0,0,0,0.1))'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;