import React from 'react';

import './styles.css';

function DetailBlock({title, info, description}) {
  return (
    <div className="details-block">
      <div className="detail-block-container">
        <div className="title">{title}</div>
        <div className="info">{info}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default DetailBlock;
