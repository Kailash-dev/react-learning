import React from 'react';

type ConceptDetailProps = {
  conceptId: string;
};

export default function ConceptDetail({ conceptId }: ConceptDetailProps) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Concept Detail: {conceptId.replace(/-/g, ' ')}</h2>
      <p>Here you will add content, examples, and explanation for the <strong>{conceptId.replace(/-/g, ' ')}</strong> concept.</p>
    </div>
  );
}
