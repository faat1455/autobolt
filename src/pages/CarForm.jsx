import React, { useState, useEffect } from 'react';

const CarForm = ({ title, onSave, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    make: '',
    price: '',
    year: '',
    km: '',
    status: 'Új autók',
    img: '',
    description: '',
    fuel: 'Benzin',
    gearbox: 'Automata'
  });

  // Betöltjük az autó adatait, ha módosításról van szó
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: (name === 'price' || name === 'year') ? Number(value) : value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Stílusok a tiszta megjelenéshez
  const inputStyle = { 
    width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #e5e7eb', 
    backgroundColor: '#f9fafb', fontSize: '14px', outline: 'none', boxSizing: 'border-box' 
  };

  const labelStyle = { 
    display: 'block', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', 
    marginBottom: '8px', color: '#6b7280', letterSpacing: '0.5px' 
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '30px' }}>{title}</h2>

        <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            
            {/* NÉV MÓDOSÍTÁSA */}
            <div style={{ gridColumn: 'span 2' }}>
              <label style={labelStyle}>Autó megnevezése</label>
              <input name="make" value={formData.make} onChange={handleChange} style={inputStyle} required />
            </div>

            {/* KÉP MÓDOSÍTÁSA / TALLÓZÁSA */}
            <div style={{ gridColumn: 'span 2' }}>
              <label style={labelStyle}>Kép módosítása (Tallózás)</label>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '80px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #ddd' }}>
                  <img src={formData.img || 'https://via.placeholder.com/120x80'} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <input type="file" accept="image/*" onChange={handleFileChange} style={{ fontSize: '13px' }} />
              </div>
            </div>

            {/* ÁR MÓDOSÍTÁSA */}
            <div>
              <label style={labelStyle}>Vételár (Ft)</label>
              <input name="price" type="number" value={formData.price} onChange={handleChange} style={inputStyle} required />
            </div>

            {/* ÉVJÁRAT MÓDOSÍTÁSA */}
            <div>
              <label style={labelStyle}>Évjárat</label>
              <input name="year" type="number" value={formData.year} onChange={handleChange} style={inputStyle} required />
            </div>

            {/* KM MÓDOSÍTÁSA */}
            <div>
              <label style={labelStyle}>Kilométer</label>
              <input name="km" value={formData.km} onChange={handleChange} style={inputStyle} required />
            </div>

            {/* ÜZEMANYAG MÓDOSÍTÁSA */}
            <div>
              <label style={labelStyle}>Üzemanyag</label>
              <select name="fuel" value={formData.fuel} onChange={handleChange} style={inputStyle}>
                <option value="Benzin">Benzin</option>
                <option value="Dízel">Dízel</option>
                <option value="Hibrid">Hibrid</option>
                <option value="Elektromos">Elektromos</option>
              </select>
            </div>

            {/* VÁLTÓ MÓDOSÍTÁSA */}
            <div>
              <label style={labelStyle}>Váltó típusa</label>
              <select name="gearbox" value={formData.gearbox} onChange={handleChange} style={inputStyle}>
                <option value="Manuális">Manuális</option>
                <option value="Automata">Automata</option>
              </select>
            </div>

            {/* STÁTUSZ MÓDOSÍTÁSA */}
            <div>
              <label style={labelStyle}>Kategória</label>
              <select name="status" value={formData.status} onChange={handleChange} style={inputStyle}>
                <option value="Új autók">Új autók</option>
                <option value="Használt autók">Használt autók</option>
              </select>
            </div>

            {/* LEÍRÁS MÓDOSÍTÁSA */}
            <div style={{ gridColumn: 'span 2' }}>
              <label style={labelStyle}>Részletes leírás</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                style={{ ...inputStyle, height: '120px', resize: 'vertical' }}
                placeholder="Írja le az autó extráit..."
              />
            </div>

          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
            <button type="submit" style={{ flex: 2, backgroundColor: '#E31E24', color: 'white', padding: '18px', borderRadius: '15px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
              Módosítások mentése
            </button>
            <button type="button" onClick={onCancel} style={{ flex: 1, backgroundColor: '#f3f4f6', color: '#4b5563', padding: '18px', borderRadius: '15px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
              Mégse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;
