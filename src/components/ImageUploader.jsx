import React from 'react';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

const ImageGallery = ({ images, onImagesChange }) => {
  const { s } = useResponsiveStyles();

  const rowStyle = {
    display: 'flex',
    flexDirection: s('column', 'row'),
    alignItems: s('stretch', 'flex-start'),
    gap: s('10px', '20px'),
    padding: s('15px 0', '20px 0'),
    borderBottom: '1px solid #f0f0f0'
  };

  const labelStyle = {
    fontSize: s('12px', '11px'),
    fontWeight: '900',
    color: '#9ca3af',
    textTransform: 'uppercase',
    width: s('100%', '130px'),
    letterSpacing: '0.5px'
  };

  const handleDeleteImage = (index) => {
    onImagesChange(images.filter((_, i) => i !== index));
  };

  const imgSize = s(80, 100);
  const btnSize = s(24, 20);

  return (
    <div style={rowStyle}>
      <div style={labelStyle}>Képek</div>
      <div style={{ flex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: s('repeat(auto-fill, minmax(80px, 1fr))', 'repeat(auto-fill, minmax(100px, 1fr))'),
          gap: s('8px', '12px'),
          marginBottom: s('12px', '15px')
        }}>
          {images.map((img, i) => (
            <div key={i} style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={img} alt={`Kép ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', border: i === 0 ? '3px solid #E31E24' : '2px solid #eee' }} />
              {i === 0 && <div style={{ position: 'absolute', top: '4px', left: '4px', backgroundColor: '#E31E24', color: 'white', fontSize: s('8px', '9px'), fontWeight: 'bold', padding: s('2px 4px', '2px 6px'), borderRadius: '4px' }}>FŐ</div>}
              <button onClick={() => handleDeleteImage(i)} style={{ position: 'absolute', top: s('2px', '4px'), right: s('2px', '4px'), backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', border: 'none', borderRadius: '50%', width: btnSize, height: btnSize, cursor: 'pointer', fontSize: s('13px', '11px'), display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, transition: 'background-color 0.2s' }} onMouseEnter={e => e.target.style.backgroundColor = 'rgba(0,0,0,0.9)'} onMouseLeave={e => e.target.style.backgroundColor = 'rgba(0,0,0,0.7)'}>✕</button>
            </div>
          ))}
          {images.length < 4 && (
            <label style={{ borderRadius: '10px', border: '2px dashed #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#9ca3af', flexDirection: 'column', gap: '4px', aspectRatio: '4/3', transition: 'border-color 0.2s, background-color 0.2s', backgroundColor: '#fafbfc' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#E31E24'; e.currentTarget.style.backgroundColor = '#fff5f5'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.backgroundColor = '#fafbfc'; }}>
              <span style={{ fontSize: s('28px', '24px') }}>+</span>
              <span style={{ fontSize: s('11px', '10px'), fontWeight: 'bold' }}>Hozzáadás</span>
              <input type="file" multiple accept="image/*" onChange={(e) => { const files = Array.from(e.target.files); e.target.value = ''; const remaining = 4 - images.length; if (remaining <= 0) { alert('Maximum 4 kép tölthető fel!'); return; } files.slice(0, remaining).forEach(file => { const reader = new FileReader(); reader.onload = (event) => onImagesChange([...images, event.target.result]); reader.readAsDataURL(file); }); }} style={{ display: 'none' }} />
            </label>
          )}
        </div>
        <div style={{ fontSize: s('12px', '12px'), color: '#9ca3af', lineHeight: '1.4' }}>Az első kép lesz a borítókép. Maximum 4 kép ({images.length}/4).</div>
      </div>
    </div>
  );
};

export default ImageGallery;