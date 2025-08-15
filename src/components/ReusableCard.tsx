import React from 'react';

type CardProps = {
  title: string;
  description?: string;
  onClick?: () => void;
};

export default function Card({ title, description, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.1)';
      }}
    >
      <h3 style={{ margin: 0, color: '#333', fontWeight: '600', fontSize: '1.1rem' }}>{title}</h3>
      {description && (
        <p style={{ marginTop: '6px', color: '#666', fontSize: '0.9rem', lineHeight: '1.3' }}>
          {description}
        </p>
      )}
    </div>
  );
}
