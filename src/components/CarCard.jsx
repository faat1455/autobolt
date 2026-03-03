import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '25px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      border: '1px solid #f0f0f0',
      transition: '0.3s',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* KÉP ÉS BADGE */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          zIndex: 10,
          padding: '5px 12px',
          borderRadius: '20px',
          fontSize: '10px',
          fontWeight: '900',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          backgroundColor: car.status === 'Új autók' ? '#E31E24' : '#1f2937',
          color: 'white'
        }}>
          {car.status === 'Új autók' ? 'Új' : 'Használt'}
        </div>
        <img 
          src={car.img} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          alt={car.make} 
        />
      </div>
      
      {/* TARTALOM */}
      <div style={{ padding: '25px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '900', margin: '0 0 5px 0' }}>
          {car.make} - {car.year}
        </h3>
        <p style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 'bold', margin: '0 0 20px 0' }}>
          Prémium minőségű választás az Ön igényeire szabva.
        </p>
        
        {/* ADATOK (IKONOKKAL) */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '15px 0', 
          borderTop: '1px solid #f9fafb', 
          borderBottom: '1px solid #f9fafb',
          marginBottom: '20px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', marginBottom: '4px' }}>🕒</div>
            <div style={{ fontSize: '10px', fontWeight: '900', color: '#374151' }}>{car.km}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', marginBottom: '4px' }}>⛽</div>
            <div style={{ fontSize: '10px', fontWeight: '900', color: '#374151' }}>{car.fuel}</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', marginBottom: '4px' }}>⚙️</div>
            <div style={{ fontSize: '10px', fontWeight: '900', color: '#374151' }}>{car.gearbox}</div>
          </div>
        </div>
        
        {/* ÁR ÉS GOMB */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '18px', fontWeight: '900', color: '#111827', margin: 0 }}>
            {car.price.toLocaleString()} Ft
          </p>
          <button style={{
            backgroundColor: '#f3f4f6',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: '900',
            color: '#4b5563',
            cursor: 'pointer',
            transition: '0.2s'
          }}>
            Részletek
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;