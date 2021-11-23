
import React from 'react';
import { useState} from 'react';
import Card from './Card/index.jsx';
import { Feedbacks } from './feedbacks.js'
//★☆
import './styles.css';

function Feedback() {

  return (
      <section className="feedback-section">
        <div className="feedback-wrapper">

          <img src="assets/images/logo.png" className="background-logo" />

          <div className="feedback-title-container">
            <span className="feedback-wrapper-title">Feedback</span>           
            <span className="feedback-wrapper-description">Compartilhe sua experiencia em nossa plataforma!</span>           
          </div>

          <div className="feedback-container">
            {
              Feedbacks.map(feedback => (
                <Card username={feedback.username} profileUrl={feedback.profileUrl ? feedback.profileUrl : null }
                star=
                {
                  "★".repeat(feedback.stars) + "☆".repeat(5 - feedback.stars)
                }
                text={feedback.text} />
              ))
            }
          </div>
          

        </div>
      </section>
  );
};

export default Feedback;
