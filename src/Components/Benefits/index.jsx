import React from 'react';

import './styles.css';

const weeklyVideoCards = [
  {
    title: "Projeto #1 - Engenharia Mecânica",
    description: "No projeto #1, Mark irá compartilhar seu processo de engenharia do início ao fim. Você aprenderá sobre sistemas pneumaticos, motores, molas e mais tópicos de engenharia mecânica para produzir seu primeiro projeto: uma máquina que resolva problemas relacionados a comidas/fome.",
    source: "https://res.cloudinary.com/monthly/video/upload/monthly-admin-images/mark-rober-engineering/Mark_Rober_Promo_1_sap6dn.mp4"
  },
  {
    title: "Build #2 - Engenharia Elétrica",
    description: "Para o projeto #2, Mark ensina técnicas de engenharia elétrica para o seu segundo projeto: um dispositivo que exibe ou cria arte. Você mergulhará em circuitos, Arduino, sensores, código e muito mais. Você vai terminar com outra construção personalizada, única e compartilhável.",
    source: "https://res.cloudinary.com/monthly/video/upload/monthly-admin-images/mark-rober-engineering/Mark_Rober_Promo_2_ezvcem.mp4"
  },
  {
    title: "Build #3 - Técnicas Avançadas",
    description: "Para o projeto #3, você usará engenharia mecânica e elétrica para criar um dispositivo que o ajudará a formar um bom hábito ou a quebrar um mau. Você também aprenderá sobre algumas das técnicas avançadas favoritas de Mark, incluindo CAD e impressão 3D.",
    source: "https://res.cloudinary.com/monthly/video/upload/monthly-admin-images/mark-rober-engineering/updated_promo_3_rober_o9lwi2.mp4"
  },
]

function Benefits() {
  return (
    <section className="benefits-section">

      <div className="title-wraper">
        <div className="title-container">
          <div className="secondary-title">UMA EXPERIÊNCIA DE APRENDIZADO IMERSIVA</div>
          <div className="main-title">Crie 3 projetos criativos em 30 dias</div>
          <div className="description">O ex-engenheiro da NASA e YouTuber Mark Rober ensina tudo o que sabe nesta aula de um mês. Mergulhe no processo e saia da classe com 3 construções de engenharia personalizadas e um novo conjunto de habilidades de engenharia criativa para toda a vida.</div>
        </div>
      </div>

      <div className="homepage-weekly-videos">
        <div className="homepage-weekly-videos-container">

          {
            weeklyVideoCards.map(video => (
              <div className="weekly-video-outer-container">
                <div className="weekly-video-rect">
                  <video className="weekly-video" autoPlay loop muted >
                    <source type="video/mp4"
                    src={video.source}/>
                  </video>
                </div>
                <div className="weekly-video-title">
                  {video.title}
                </div>
                <div className="weekly-video-description">
                  {video.description}
                </div>
              </div>
            ))
          }

        </div>
      </div>

    </section>
  );
};

export default Benefits;
