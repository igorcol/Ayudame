
import React from 'react';
import { useState} from 'react';
import { CursosList } from './cursos.js'

import './styles.css';

function Cursos() {

  return (
      <section className="modalidades-section">
        <div className="modalidades-wrapper">

          <img src="assets/images/logo.png" className="background-logo" />

          <div className="modalidades-title-container">
            <span className="modalidades-wrapper-title">Outros Cursos</span>           
            <span className="modalidades-wrapper-description">Descubra todos cursos que a comunidade tem a oferecer!</span>           
          </div>

          

        </div>
      </section>
  );
};

export default Cursos;
