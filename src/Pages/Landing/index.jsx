import React from 'react';

import Main from '../../Components/Main'
import Benefits from '../../Components/Benefits';
import Destaque from '../../Components/Destaque';
import Details from '../../Components/Details';
import Cursos from '../../Components/Cursos'
import Feedback from '../../Components/Feedback'

import './styles.css';

function Landing() {
  return (
    <div className="LandingPage">

      <Main/>
      <Destaque/>
      <Details/>
      <Benefits/>
      <Cursos/>
      <Feedback/>

    </div>
  );
};

export default Landing;
