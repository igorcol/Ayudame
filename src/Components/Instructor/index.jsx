import React from 'react';

import './styles.css';

function Instructor() {
  return (
    <div className="instructor-section">

        <div className="instructor-left"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/monthly/image/upload/monthly-admin-images/mark-rober-engineering/rober-headshot.jpg)",
            backgroundPosition: "center",
            backgroundPositionY: "-60px",
            backgroundSize: 'cover',
          }}
        />

        <div className="instructor-right">
            <img src="assets/wave.png" className="wave-image" />
            <div className="instructor-title-container">
                <div className="instructor-title">Aprenda com o melhor</div>
                <div className="instructor-name">Mark Rober</div>
                <div className="instructor-description ">Mark Rober é um inventor e ex-engenheiro da Apple e da NASA, onde passou 7 anos trabalhando no rover Curiosity. Você pode conhecê-lo de seu canal no YouTube, onde ele tem 1,6 bilhão de visualizações e quase 15 milhões de assinantes. Sua longa lista de criações extraordinárias inclui um alvo de dardos automático, uma armadilha para ladrões com bomba de glitter e um taco de golfe movido a foguete. Ele foi nadar com tubarões, compartilhou hambúrgueres sem carne com Bill Gates e fez travessuras do Dia da Mentira com Jimmy Kimmel - tudo em nome da ciência.</div>
            </div>
        </div>

    </div>
  );
};

export default Instructor;
