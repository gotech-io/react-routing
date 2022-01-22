import React from 'react';
import { useParams } from 'react-router-dom';

const Params = () => {
  const params = useParams();

  return (
    <div className="Params">
      <h1>I got params - {params.id}</h1>
    </div>
  );
};

export default Params;
