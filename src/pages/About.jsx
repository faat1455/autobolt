import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px', animation: 'fadeIn 0.6s' }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '50px', 
        borderRadius: '30px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '20px', letterSpacing: '-1px' }}>Rólunk</h1>
        <div style={{ width: '80px', height: '5px', backgroundColor: '#E31E24', borderRadius: '5px', marginBottom: '30px' }}></div>
        
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', maxWidth: '700px' }}>
          Az <strong>AutoBolt</strong>-nál nem csak autókat árulunk, hanem bizalmat és biztonságot nyújtunk ügyfeleinknek. 
          Több mint 10 éves tapasztalattal a hátunk mögött segítünk megtalálni az igényeihez leginkább illő járművet, 
          legyen szó akár új luxusautóról, akár megbízható használt családi kocsiról.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', width: '100%', marginTop: '50px' }}>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#E31E24', margin: '0 0 10px 0' }}>500+</h3>
            <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase' }}>Eladott autó</p>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#E31E24', margin: '0 0 10px 0' }}>100%</h3>
            <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase' }}>Elégedettség</p>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#E31E24', margin: '0 0 10px 0' }}>24/7</h3>
            <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase' }}>Ügyfélszolgálat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;