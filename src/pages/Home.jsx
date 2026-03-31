import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import CarFilter from '../components/CarFilter';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

const Home = ({ filteredCars, selectedFilter, setSelectedFilter, filterOpen, setFilterOpen, onDetailsClick }) => {
  const { s } = useResponsiveStyles();
  const [displayedCars, setDisplayedCars] = useState(filteredCars);

  return (
    <div style={{ padding: s('20px 15px', '40px'), backgroundColor: '#F3F4F6', minHeight: '100vh' }}>

      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: s('24px', '30px') }}>
        <p style={{ color: '#9ca3af', fontSize: s('11px', '12px'), fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0 }}>
          Találj eladó és bérelhető autókat a közeledben
        </p>
        <h1 style={{ fontSize: s('26px', '42px'), fontWeight: '900', color: '#111827', margin: s('8px 0', '10px 0'), lineHeight: '1.2' }}>
          Találd meg álmaid autóját
        </h1>
      </div>

      {/* SZŰRŐ KOMPONENS */}
      <CarFilter
        cars={filteredCars}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
        onFilteredCarsChange={setDisplayedCars}
      />

      {/* AUTÓK RÁCSA */}
      <div style={{ display: 'grid', gridTemplateColumns: s('1fr', 'repeat(auto-fill, minmax(380px, 1fr))'), gap: s('16px', '40px'), maxWidth: '1200px', margin: '0 auto' }}>
        {displayedCars.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: s('40px 20px', '80px'), color: '#9ca3af' }}>
            <div style={{ fontSize: s('40px', '48px'), marginBottom: '15px' }}>🔍</div>
            <div style={{ fontSize: s('16px', '18px'), fontWeight: 'bold' }}>Nincs találat</div>
            <div style={{ fontSize: s('13px', '14px'), marginTop: '8px' }}>Próbálj más keresési feltételeket</div>
          </div>
        ) : displayedCars.map(car => (
          <CarCard key={car.id} car={car} onDetailsClick={onDetailsClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;