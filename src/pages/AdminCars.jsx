import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const AdminCars = ({ cars, deleteCar, onAddClick, onEditClick }) => {
  const width = useWindowSize();
  const isMobile = width < 768;

  const tableHeaderStyle = { padding: '12px 15px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', color: '#374151', textAlign: 'left', borderBottom: '2px solid #f3f4f6' };
  const tableDataStyle = { padding: '12px 15px', fontSize: '14px', borderBottom: '1px solid #f3f4f6', verticalAlign: 'middle' };

  return (
    <div style={{ maxWidth: '1100px', margin: '30px auto', padding: '0 15px' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '10px' }}>
        <h1 style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: '900', margin: 0 }}>Autók kezelése</h1>
        <button onClick={onAddClick} style={{ backgroundColor: 'green', color: 'white', padding: '12px 20px', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          + Új autó
        </button>
      </div>

      {/* Mobil kártyás nézet */}
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {cars.map(car => (
            <div key={car.id} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <img src={car.img ? car.img.split('|||')[0] : ''} alt={car.make} style={{ width: '70px', height: '50px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 'bold', fontSize: '15px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{car.make}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>{car.status} · #{car.id}</div>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', marginTop: '2px' }}>{car.price.toLocaleString('de-DE')} Ft</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
                <button onClick={() => onEditClick(car)} style={{ backgroundColor: '#1f2937', color: 'white', border: 'none', padding: '7px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}>
                  Módosítás
                </button>
                <button onClick={() => deleteCar(car.id)} style={{ backgroundColor: '#E31E24', color: 'white', border: 'none', padding: '7px 12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}>
                  Törlés
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop táblázat */
        <div style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <th style={tableHeaderStyle}>ID</th>
                <th style={tableHeaderStyle}>Fotó</th>
                <th style={tableHeaderStyle}>Megnevezés</th>
                <th style={tableHeaderStyle}>Ár</th>
                <th style={{ ...tableHeaderStyle, textAlign: 'right' }}>Műveletek</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id}>
                  <td style={tableDataStyle}>#{car.id}</td>
                  <td style={tableDataStyle}>
                    <img src={car.img ? car.img.split('|||')[0] : ''} alt={car.make} style={{ width: '55px', height: '38px', borderRadius: '6px', objectFit: 'cover' }} />
                  </td>
                  <td style={tableDataStyle}>
                    <div style={{ fontWeight: 'bold' }}>{car.make}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{car.status}</div>
                  </td>
                  <td style={{ ...tableDataStyle, fontWeight: 'bold' }}>{car.price.toLocaleString('de-DE')} Ft</td>
                  <td style={{ ...tableDataStyle, textAlign: 'right' }}>
                    <button onClick={() => onEditClick(car)} style={{ backgroundColor: '#1f2937', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', marginRight: '8px', fontWeight: 'bold' }}>Módosítás</button>
                    <button onClick={() => deleteCar(car.id)} style={{ backgroundColor: '#E31E24', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Törlés</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminCars;