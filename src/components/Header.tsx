import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#d32f2f', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <h1>לוטו - הגרלה שבועית</h1>
      <p>בשישי עד: <span style={{ fontWeight: 'bold' }}>80,000,000 ₪</span></p>
      <p>זמן לסגירת ההגרלה: 03:45:17</p>
    </header>
  );
};

export default Header;
