import React from 'react';
import { Fuel, Gauge, Settings2, Calendar } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const CarCard = ({ car, onDetailsClick }) => {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', position: 'relative' }}>

      {/* Badge */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: car.status === 'Új autók' ? '#E31E24' : '#1f2937', color: 'white', padding: '5px 12px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', zIndex: 2 }}>
        {car.status === 'Új autók' ? 'ÚJ' : 'HASZNÁLT'}
      </div>

      {/* Kép */}
      <div style={{ height: isMobile ? '220px' : '280px', cursor: 'pointer' }} onClick={() => onDetailsClick(car)}>
        <img src={car.img ? car.img.split('|||')[0] : ''} alt={car.make} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Tartalom */}
      <div style={{ padding: isMobile ? '20px' : '35px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: isMobile ? '22px' : '28px', fontWeight: '900', color: '#111827' }}>
          {car.make} - {car.year}
        </h3>
        <p style={{ color: '#9ca3af', fontSize: '14px', margin: '0 0 25px 0' }}>
          Prémium minőségű választás az Ön igényeire szabva.
        </p>

        {/* Adatok */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px', borderTop: '1px solid #f3f4f6', paddingTop: '20px' }}>
          <IconBox icon={<Gauge size={16} color="#E31E24" />} label="Kilométer" value={car.km} />
          <IconBox icon={<Fuel size={16} color="#E31E24" />} label="Üzemanyag" value={car.fuel} />
          <IconBox icon={<Settings2 size={16} color="#E31E24" />} label="Váltó" value={car.gearbox} />
          <IconBox icon={<Calendar size={16} color="#E31E24" />} label="Évjárat" value={car.year} />
        </div>

        {/* Ár + gomb */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: isMobile ? '22px' : '26px', fontWeight: '900', color: '#111827' }}>
            {car.price.toLocaleString('de-DE')} Ft
          </div>
          <button onClick={() => onDetailsClick(car)} style={{ backgroundColor: '#f3f4f6', border: 'none', padding: '12px 24px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer', color: '#6b7280', fontSize: '14px' }}>
            Részletek
          </button>
        </div>
      </div>
    </div>
  );
};

const IconBox = ({ icon, label, value }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <div style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {icon}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 'bold', textTransform: 'uppercase' }}>{label}</span>
      <span style={{ fontSize: '13px', fontWeight: '800', color: '#111827' }}>{value}</span>
    </div>
  </div>
);

export default CarCard;