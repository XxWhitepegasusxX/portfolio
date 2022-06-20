import React from 'react';

// import { Container } from './styles';

const About: React.FC = () => {
  return (
      <section id='about'>
          <div className="pic">
              <img src="/images/home.png" alt="My profile pic" />
          </div>
          <div className="text">
            <h1>Sobre mim</h1>
            <p>Sou desenvolvedor front end em preparação para tornar-me programador full stack. Criar ambientes inovadores que proporcionem melhor experiência para usuários é meu primeiro foco. Criatividade e proatividade são bem desenvolvidas com trabalho em equipe ou isolado.</p>
            <p>Atualmente estou cursando Faculdade de Análise e Desenvolvimento de Sistemas com foco em Java;  em complemento, conclui os cursos sobre programação e desenvolvimento de softwares: Rocketseat, StaartBR, Origamid e ProgramadorBR que utilizei para elaboração de alguns projetos onde pude demostrar as habilidades adquiridas.</p>
          </div>
      </section>
  );
}

export default About;
