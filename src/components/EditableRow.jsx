import React, { useState } from 'react';
import useResponsiveStyles from '../hooks/useResponsiveStyles';
import ActionButtons from './ActionButtons';

const EditableRow = ({
  label, name, type = 'text',
  isSelect = false, options = [], multiline = false,
  formData, activeField, setActiveField,
  tempValue, setTempValue,
  saving, savedField,
  onSave
}) => {
  const { s } = useResponsiveStyles();
  const isEditing = activeField === name;
  const justSaved = savedField === name;

  const rowStyle = {
    display: 'flex',
    flexDirection: s('column', 'row'),
    alignItems: s('stretch', 'center'),
    gap: s('10px', '20px'),
    padding: s('15px 0', '20px 0'),
    borderBottom: '1px solid #f0f0f0',
    backgroundColor: justSaved ? '#f0fdf4' : 'transparent',
    transition: 'background-color 0.3s',
    borderRadius: '8px'
  };

  const labelStyle = {
    fontSize: s('12px', '11px'),
    fontWeight: '900',
    color: '#9ca3af',
    textTransform: 'uppercase',
    width: s('100%', '130px'),
    paddingTop: multiline && isEditing ? '12px' : '0',
    letterSpacing: '0.5px'
  };

  const valueStyle = {
    fontSize: s('15px', '16px'),
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
    whiteSpace: multiline ? 'pre-wrap' : 'normal',
    wordBreak: 'break-word'
  };

  const inputStyle = {
    padding: s('12px 12px', '10px 15px'),
    borderRadius: '10px',
    border: '2px solid #E31E24',
    outline: 'none',
    flex: 1,
    fontSize: s('16px', '15px'),
    width: '100%',
    boxSizing: 'border-box'
  };

  const editBtnStyle = {
    backgroundColor: '#f3f4f6',
    border: 'none',
    padding: s('10px 14px', '8px 16px'),
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#4b5563',
    fontSize: s('13px', '14px'),
    whiteSpace: 'nowrap',
    transition: 'background-color 0.2s',
    width: s('100%', 'auto')
  };

  return (
    <div style={rowStyle}>
      <div style={labelStyle}>{label}</div>

      {isEditing ? (
        <div style={{ display: 'flex', flexDirection: s('column', 'row'), gap: s('10px', '8px'), flex: 1, width: '100%' }}>
          {isSelect ? (
            <select value={tempValue} onChange={e => setTempValue(e.target.value)} style={inputStyle} autoFocus>
              {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          ) : multiline ? (
            <textarea
              value={tempValue}
              onChange={e => setTempValue(e.target.value)}
              style={{ ...inputStyle, resize: 'vertical', minHeight: s('120px', '150px'), lineHeight: '1.6', fontFamily: 'sans-serif' }}
              autoFocus
            />
          ) : (
            <input type={type} value={tempValue} onChange={e => setTempValue(e.target.value)} style={inputStyle} autoFocus />
          )}
          <ActionButtons onSave={() => onSave(name)} onCancel={() => setActiveField(null)} saving={saving} multiline={multiline} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: s('column', 'row'), alignItems: s('stretch', 'center'), gap: s('10px', '15px'), flex: 1, width: '100%' }}>
          <div style={valueStyle}>
            {justSaved && <span style={{ color: '#10b981', fontSize: '12px', marginRight: '8px' }}>✓ Mentve</span>}
            {name === 'price' ? `${Number(formData[name]).toLocaleString('de-DE')} Ft` : formData[name]}
          </div>
          <button
            onClick={() => { setActiveField(name); setTempValue(formData[name]); }}
            style={editBtnStyle}
            onMouseEnter={e => e.target.style.backgroundColor = '#e5e7eb'}
            onMouseLeave={e => e.target.style.backgroundColor = '#f3f4f6'}
          >
            Módosítás
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableRow;