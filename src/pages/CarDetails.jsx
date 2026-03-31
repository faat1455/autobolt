import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Gauge, Fuel, Settings2, Zap, Navigation, Package, Weight } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const SEP = '|||';

const CarDetails = ({ onBack, onContact }) => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [imgFullscreen, setImgFullscreen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const width = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(`http://192.168.12.102:3000/api/cars/${id}`);
        const data = await res.json();
        setCar(data);
      } catch (err) {
        console.error('Hiba az autó betöltésekor:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  const images = car?.img ? car.img.split(SEP).filter(Boolean) : [];
  const nextImg = () => setActiveImg(prev => (prev + 1) % images.length);
  const prevImg = () => setActiveImg(prev => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (images.length <= 1) return;
      if (e.key === 'Escape') setImgFullscreen(false);
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'ArrowLeft') prevImg();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [images.length]);

  if (loading) return <div style={{ textAlign: 'center', padding: '80px', fontSize: '18px', color: '#9ca3af' }}>Betöltés...</div>;
  if (!car) return <div style={{ textAlign: 'center', padding: '80px', fontSize: '18px', color: '#9ca3af' }}>Az autó nem található.</div>;

  const descriptionText = car.description || 'Ehhez az autóhoz még nem tartozik részletes leírás.';

  const StatBox = ({ icon: Icon, label, value }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
      <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#fff5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={16} color="#E31E24" />
      </div>
      <div>
        <div style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 'bold', textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827' }}>{value}</div>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 15px', fontFamily: 'sans-serif' }}>

      {/* Teljesképernyős modal */}
      {imgFullscreen && (
        <div onClick={() => setImgFullscreen(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}>
          <button onClick={() => setImgFullscreen(false)} style={{ position: 'absolute', top: '20px', right: '28px', background: 'none', border: 'none', color: 'white', fontSize: '36px', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
          {images.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prevImg(); }} style={{ position: 'absolute', left: '20px', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer', borderRadius: '50%', width: '52px', height: '52px' }}>‹</button>
              <button onClick={(e) => { e.stopPropagation(); nextImg(); }} style={{ position: 'absolute', right: '20px', background: 'rgba(255,255,255,0.15)', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer', borderRadius: '50%', width: '52px', height: '52px' }}>›</button>
            </>
          )}
          <img src={images[activeImg]} alt={car.make} onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '12px' }} />
          {images.length > 1 && (
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', color: 'white', fontSize: '14px', fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.4)', padding: '6px 14px', borderRadius: '20px' }}>
              {activeImg + 1} / {images.length}
            </div>
          )}
        </div>
      )}

      {/* Vissza gomb */}
      <button onClick={onBack} style={{ marginBottom: '20px', cursor: 'pointer', border: 'none', background: 'none', fontWeight: 'bold', fontSize: '15px' }}>
        ← Vissza a kínálathoz
      </button>

      {/* FŐ KÁRTYA */}
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '30px', backgroundColor: 'white', padding: isMobile ? '20px' : '40px', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', marginBottom: '20px' }}>

        {/* GALÉRIA */}
        <div style={{ flex: 1.5, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px' }}>
          {/* Miniatűrök - mobilon vízszintes, desktopon függőleges */}
          {images.length > 1 && (
            <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', gap: '8px', width: isMobile ? '100%' : '80px', flexShrink: 0, justifyContent: 'center', order: isMobile ? 2 : 0 }}>
              {images.map((img, i) => (
                <img key={i} src={img} alt="" onClick={() => setActiveImg(i)}
                  style={{ width: isMobile ? '60px' : '80px', height: isMobile ? '45px' : '60px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer', border: activeImg === i ? '3px solid #E31E24' : '2px solid transparent', opacity: activeImg === i ? 1 : 0.6, transition: 'all 0.2s' }}
                />
              ))}
            </div>
          )}
          {/* Fő kép */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img src={images[activeImg] || ''} alt={car.make} onClick={() => setImgFullscreen(true)}
              style={{ width: '100%', height: isMobile ? '250px' : '450px', objectFit: 'contain', borderRadius: '20px', cursor: 'zoom-in', backgroundColor: '#f3f4f6' }}
            />
            {images.length > 1 && (
              <>
                <button onClick={prevImg} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', border: 'none', color: 'white', fontSize: '22px', cursor: 'pointer', borderRadius: '50%', width: '38px', height: '38px' }}>‹</button>
                <button onClick={nextImg} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.4)', border: 'none', color: 'white', fontSize: '22px', cursor: 'pointer', borderRadius: '50%', width: '38px', height: '38px' }}>›</button>
              </>
            )}
          </div>
        </div>

        {/* ADATOK */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ backgroundColor: '#f3f4f6', display: 'inline-block', padding: '5px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>{car.status}</div>
            <h1 style={{ fontSize: isMobile ? '26px' : '34px', fontWeight: '900', marginBottom: '5px', marginTop: '0' }}>{car.make}</h1>
            {car.subtitle && <div style={{ color: 'grey', fontSize: '15px', marginBottom: '10px' }}>{car.subtitle}</div>}
            <div style={{ fontSize: isMobile ? '24px' : '28px', color: '#E31E24', fontWeight: '900', marginBottom: '20px' }}>{Number(car.price).toLocaleString('de-DE')} Ft</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <StatBox icon={Calendar}   label="Évjárat"      value={car.year} />
              <StatBox icon={Gauge}      label="Kilométer"    value={car.km} />
              <StatBox icon={Fuel}       label="Üzemanyag"    value={car.fuel} />
              <StatBox icon={Settings2}  label="Váltó"        value={car.gearbox} />
              <StatBox icon={Zap}        label="Teljesítmény" value={`${car.teljesitmeny} LE`} />
              <StatBox icon={Navigation} label="Hajtás"       value={car.hajtas} />
              <StatBox icon={Package}    label="Csomagtér"    value={`${car.csomagter} L`} />
              <StatBox icon={Weight}     label="Tömeg"        value={`${car.tomeg} kg`} />
            </div>
          </div>

          <button onClick={onContact} style={{ width: '100%', backgroundColor: '#000', color: 'white', padding: '18px', borderRadius: '15px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}>
            Érdeklődöm az autó iránt
          </button>
        </div>
      </div>

      {/* LEÍRÁS */}
      <div style={{ backgroundColor: 'white', padding: isMobile ? '20px' : '30px 35px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '15px' }}>Leírás</h3>
        <div style={{ lineHeight: '1.7', color: '#374151', fontSize: '15px', whiteSpace: 'pre-wrap' }}>
          {expanded || descriptionText.length <= 150 ? descriptionText : descriptionText.slice(0, 150) + '...'}
        </div>
        {descriptionText.length > 150 && (
          <button onClick={() => setExpanded(!expanded)} style={{ marginTop: '15px', border: 'none', background: 'none', color: '#2563eb', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}>
            {expanded ? 'Kevesebb megjelenítése ▲' : 'Bővebben ▼'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CarDetails;