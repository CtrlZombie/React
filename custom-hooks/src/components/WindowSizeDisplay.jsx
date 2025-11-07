import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const WindowSizeDisplay = () => {
  const { width, height } = useWindowSize();

  const getDeviceType = () => {
    if (width < 768) return '📱 Mobile';
    if (width < 1024) return '📟 Tablet';
    return '💻 Desktop';
  };

  const getOrientation = () => {
    return width > height ? 'Landscape' : 'Portrait';
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>useWindowSize Hook Demo</h2>
      
      <div style={styles.stats}>
        <div style={styles.statItem}>
          <span style={styles.label}>Width:</span>
          <span style={styles.value}>{width}px</span>
        </div>
        
        <div style={styles.statItem}>
          <span style={styles.label}>Height:</span>
          <span style={styles.value}>{height}px</span>
        </div>
        
        <div style={styles.statItem}>
          <span style={styles.label}>Device Type:</span>
          <span style={styles.value}>{getDeviceType()}</span>
        </div>
        
        <div style={styles.statItem}>
          <span style={styles.label}>Orientation:</span>
          <span style={styles.value}>{getOrientation()}</span>
        </div>
      </div>

      <div style={styles.instructions}>
        <p>Попробуй изменить размер окна браузера!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#2c3e50',
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  statItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    background: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
  },
  label: {
    fontWeight: '600',
    color: '#495057',
  },
  value: {
    fontWeight: 'bold',
    color: '#1971c2',
    fontSize: '16px',
  },
  instructions: {
    background: '#e3f2fd',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #bbdefb',
  },
};

export default WindowSizeDisplay;