import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import useResponsiveStyles from '../hooks/useResponsiveStyles';

const CarFilter = ({
  cars,
  selectedFilter,
  setSelectedFilter,
  filterOpen,
  setFilterOpen,
  onFilteredCarsChange
}) => {
  const { s } = useResponsiveStyles();
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);

  let displayedCars = cars.filter(car => {
    const matchSearch = car.make.toLowerCase().includes(search.toLowerCase());
    const matchMin = minPrice === '' || car.price >= Number(minPrice);
    const matchMax = maxPrice === '' || car.price <= Number(maxPrice);
    return matchSearch && matchMin && matchMax;
  });

  if (sortOrder === 'asc') displayedCars = [...displayedCars].sort((a, b) => a.price - b.price);
  if (sortOrder === 'desc') displayedCars = [...displayedCars].sort((a, b) => b.price - a.price);

  useEffect(() => {
    onFilteredCarsChange(displayedCars);
  }, [search, minPrice, maxPrice, sortOrder, cars, selectedFilter]);

  const hasActiveFilters = search !== '' || minPrice !== '' || maxPrice !== '';
  const clearFilters = () => { setSearch(''); setMinPrice(''); setMaxPrice(''); };
  const cycleSortOrder = () => setSortOrder(prev => prev === null ? 'asc' : prev === 'asc' ? 'desc' : null);
  const sortLabel = sortOrder === 'asc' ? '↑ Legolcsóbb' : sortOrder === 'desc' ? '↓ Legdrágább' : 'Ár';

  return (
    <div style={{ maxWidth: '1150px', margin: '0 auto 40px auto', backgroundColor: 'white', padding: s('15px', '25px'), borderRadius: s('20px', '25px'), boxShadow: '0 4px 25px rgba(0,0,0,0.03)' }}>

      {/* Kategória cím */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: s('10px', '12px'), fontSize: s('10px', '11px'), fontWeight: '900', color: '#111827' }}>
        <span style={{ backgroundColor: '#000', color: '#fff', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>−</span>
        SZŰRÉS KATEGÓRIA SZERINT
      </div>

      {/* Kategória dropdown */}
      <div onClick={() => setFilterOpen(!filterOpen)} style={{ border: '1px solid #f0f0f0', padding: s('12px', '15px'), borderRadius: '15px', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontWeight: 'bold', marginBottom: s('12px', '15px'), fontSize: s('14px', '15px') }}>
        {selectedFilter.toUpperCase()}
        <span style={{ transition: 'transform 0.2s', display: 'inline-block', transform: filterOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
      </div>

      {/* Dropdown menü */}
      {filterOpen && (
        <div style={{ position: 'absolute', width: s('calc(100% - 30px)', '800px'), backgroundColor: 'white', marginTop: '-10px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 100, left: s('15px', 'auto') }}>
          {['Összes autó', 'Új autók', 'Használt autók'].map(f => (
            <div key={f} onClick={() => { setSelectedFilter(f); setFilterOpen(false); }} style={{ padding: s('12px 15px', '15px 20px'), cursor: 'pointer', borderBottom: '1px solid #f9f9f9', fontWeight: selectedFilter === f ? 'bold' : 'normal', color: selectedFilter === f ? '#E31E24' : '#111827', fontSize: s('14px', '15px') }}>
              {f}
            </div>
          ))}
        </div>
      )}

      {/* Keresés + gombok */}
      <div style={{ display: 'flex', gap: s('6px', '8px'), alignItems: 'center', flexWrap: s('wrap', 'nowrap') }}>
        <div style={{ flex: 1, minWidth: s('100%', 'auto'), position: 'relative' }}>
          <Search size={16} color="#9ca3af" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Keresés autó neve alapján..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', padding: s('12px 12px 12px 40px', '14px 14px 14px 42px'), borderRadius: '12px', border: '1px solid #f0f0f0', fontSize: s('14px', '14px'), outline: 'none', boxSizing: 'border-box', backgroundColor: '#f9fafb' }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0 }}>
              <X size={14} />
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: s('6px', '8px'), width: s('100%', 'auto') }}>
          <button onClick={() => setShowPriceFilter(!showPriceFilter)} style={{ flex: s(1, 0), display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: s('12px 12px', '14px 16px'), borderRadius: '12px', border: '1px solid #f0f0f0', backgroundColor: showPriceFilter || (minPrice || maxPrice) ? '#111827' : '#f9fafb', color: showPriceFilter || (minPrice || maxPrice) ? 'white' : '#6b7280', fontWeight: 'bold', cursor: 'pointer', fontSize: s('13px', '14px'), whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
            <SlidersHorizontal size={16} />
            {s('', 'Ár szűrő')}
            {(minPrice || maxPrice) && <span style={{ backgroundColor: '#E31E24', borderRadius: '50%', width: '8px', height: '8px', display: 'inline-block' }} />}
          </button>

          <button onClick={cycleSortOrder} style={{ flex: s(1, 0), display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: s('12px 12px', '14px 16px'), borderRadius: '12px', border: '1px solid #f0f0f0', backgroundColor: sortOrder ? '#111827' : '#f9fafb', color: sortOrder ? 'white' : '#6b7280', fontWeight: 'bold', cursor: 'pointer', fontSize: s('13px', '14px'), whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
            <ArrowUpDown size={16} />
            {sortLabel}
          </button>
        </div>
      </div>

      {/* Ár szűrő panel */}
      {showPriceFilter && (
        <div style={{ marginTop: s('10px', '12px'), padding: s('12px', '15px'), backgroundColor: '#f9fafb', borderRadius: '15px', display: 'flex', flexDirection: s('column', 'row'), gap: s('10px', '12px'), alignItems: s('stretch', 'center') }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: s('10px', '11px'), fontWeight: '900', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Min. ár (Ft)</div>
            <input type="number" placeholder="pl. 1 000 000" value={minPrice} onChange={e => setMinPrice(e.target.value)} style={{ width: '100%', padding: s('10px', '12px'), borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: s('14px', '14px'), outline: 'none', boxSizing: 'border-box' }} />
          </div>
          {s('', <div style={{ color: '#9ca3af', fontWeight: 'bold' }}>—</div>)}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: s('10px', '11px'), fontWeight: '900', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.5px' }}>Max. ár (Ft)</div>
            <input type="number" placeholder="pl. 5 000 000" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} style={{ width: '100%', padding: s('10px', '12px'), borderRadius: '10px', border: '1px solid #e5e7eb', fontSize: s('14px', '14px'), outline: 'none', boxSizing: 'border-box' }} />
          </div>
          {(minPrice || maxPrice) && (
            <button onClick={() => { setMinPrice(''); setMaxPrice(''); }} style={{ background: 'none', border: 'none', color: '#E31E24', fontWeight: 'bold', cursor: 'pointer', fontSize: s('12px', '13px'), padding: 0, whiteSpace: 'nowrap' }}>
              Törlés
            </button>
          )}
        </div>
      )}

      {/* Találatok */}
      {(hasActiveFilters || sortOrder) && (
        <div style={{ marginTop: s('10px', '12px'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: s('8px', '8px') }}>
          <span style={{ fontSize: s('12px', '13px'), color: '#9ca3af' }}>
            <span style={{ fontWeight: 'bold', color: '#111827' }}>{displayedCars.length}</span> találat
          </span>
          <div style={{ display: 'flex', gap: s('6px', '10px'), flexWrap: 'wrap' }}>
            {sortOrder && (
              <button onClick={() => setSortOrder(null)} style={{ background: 'none', border: 'none', color: '#6b7280', fontWeight: 'bold', cursor: 'pointer', fontSize: s('12px', '13px'), display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}>
                <X size={13} /> Rendezés
              </button>
            )}
            {hasActiveFilters && (
              <button onClick={clearFilters} style={{ background: 'none', border: 'none', color: '#E31E24', fontWeight: 'bold', cursor: 'pointer', fontSize: s('12px', '13px'), display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}>
                <X size={13} /> Szűrők
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarFilter;