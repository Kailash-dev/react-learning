import React from 'react';

const LazyLoadedExample = () => {
  return (
    <div
      style={{
        padding: '20px',
        margin: '10px 0',
        backgroundColor: '#e0f7fa',
        borderRadius: '8px',
        textAlign: 'center',
        fontWeight: '600',
      }}
    >
      🎉 This component was loaded lazily!
    </div>
  );
};

export default LazyLoadedExample;
