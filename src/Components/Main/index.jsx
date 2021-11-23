import React from 'react';

import './styles.css';
import { useState } from 'react';

function Main() {

  const [vomito, setVomito] = useState(false);
  const [counter, setCounter] = useState(0);

  function functionVomito() {
    if(counter < 4) {
      setCounter(counter => counter + 1)
      setVomito(false)
    }
    else {
      setCounter(0)
      setVomito(true)
    }
  }

  return (
    <section className="main-section">

      <div className="main-wrapper">

        <div className="main-logo">
          <img src="images/logo2.png" className="main-logo-image" />
        </div>
        
        
        <div className="main-description" onClick={functionVomito}>
          Cursos de diversas áreas do conhecimento para todas as idades. Venha aprender engenharia, arquitetura{vomito ? ' 🤮' : ''}, artes ou matérias escolares para passar no vestibular!! Venha estudar com a gente!
        </div>

      </div>
    </section>
  );
};

export default Main;
