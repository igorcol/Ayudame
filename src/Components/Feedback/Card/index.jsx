import React from 'react';

import './styles.css';


function Card({profileUrl, username, text, star}) {
  return (
    <div className="feedback-card-wapper">

      <div className="feedback-user-container">
        <div className="feedback-card-profile">
          {
            profileUrl
            ? <img src={profileUrl} className="feedback-profile-image" />
            : ''
          }
        </div>

        <div className="feedback-card-rating">
          <div className="feedback-card-username">{username}</div>
          <div className="feedback-card-stars">{star}</div>
        </div>
      </div>
      
      <div className="feedback-card-text">{text}</div>


    </div>
  );
};

export default Card;
