import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const About = () => {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <div style={{ maxWidth: '1000px', margin: isMobile ? '30px auto' : '60px auto', padding: '0 15px' }}>
      <div style={{ backgroundColor: 'white', padding: isMobile ? '30px 20px' : '50px', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: '900', marginBottom: '20px', letterSpacing: '-1px' }}>Rólunk</h1>
        <div style={{ width: '80px', height: '5px', backgroundColor: '#E31E24', borderRadius: '5px', marginBottom: '25px' }}></div>

        <p style={{ fontSize: isMobile ? '15px' : '18px', color: '#4b5563', lineHeight: '1.6', maxWidth: '700px' }}>
          Az <strong>AutoBolt</strong>-nál nem csak autókat árulunk, hanem bizalmat és biztonságot nyújtunk ügyfeleinknek.
          Több mint 10 éves tapasztalattal a hátunk mögött segítünk megtalálni az igényeihez leginkább illő járművet,
          legyen szó akár új luxusautóról, akár megbízható használt családi kocsiról.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '25px', width: '100%', marginTop: '40px' }}>
          {[
            { value: '500+', label: 'Eladott autó' },
            { value: '100%', label: 'Elégedettség' },
            { value: '24/7', label: 'Ügyfélszolgálat' },
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: '#f9fafb', borderRadius: '16px', padding: '25px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#E31E24', margin: '0 0 8px 0' }}>{stat.value}</h3>
              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;