import React from 'react';
import DetailBlock from './DetailBlock';
import './styles.css';

const details = [
  {
    title: "Início das aulas",
    info: "26 De Dezembro",
    description: "Início 3 dias após o fim das inscrições. Aulas 100% virtuais."
  },
  {
    title: "TEMPO",
    info: "1 Mês de Aprendizado",
    description: "5-10 horas/semana durante 4 semanas."
  },
  {
    title: "PRODUTO FINAL",
    info: "3 Projetos Personalizados",
    description: "Desenvolva 3 projetos com o seu próprio design durante as aulas."
  },
  {
    title: "PUBLICO ALVO",
    info: "Todos São Bem Vindos",
    description: "Iniciante or Avançado, estas aulas serão uteis para todos os níveis."
  },
]

function Details() {
  return (
    <section className="courses-details">

      <div className="details-container">
        {
          details.map(detail => (
            <DetailBlock key={details.indexOf(detail)}
              title={detail.title}
              info={detail.info}
              description={detail.description}
            />
          ))
        }
      </div>

    </section>
  );
};

export default Details;
