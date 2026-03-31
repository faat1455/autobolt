import React from 'react';

const saveBtnStyle = { backgroundColor: '#10b981', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };
const cancelBtnStyle = { backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };

const ActionButtons = ({ onSave, onCancel, saving, multiline }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: multiline ? '12px' : '0' }}>
      <button onClick={onSave} style={saveBtnStyle} disabled={saving}>
        {saving ? '...' : 'Mentés'}
      </button>
      <button onClick={onCancel} style={cancelBtnStyle}>
        Mégse
      </button>
    </div>
  );
};

export default ActionButtons;