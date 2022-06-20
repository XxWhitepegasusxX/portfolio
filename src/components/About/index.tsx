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
            <p>Meu nome é Alexander, sou desenvolvedor front end, comecei meus estudos em 2020, meu maior interesse é me tornar um programador full stack, gosto de sempre inovar e ter mais idéias para criar coisas que proporcionem a melhor experiência para os usuários. Sou muito criativo e proativo, gosto de trabalhar em equipe, apesar de também saber trabalhar muito bem sozinho.</p>
            <p>Faço faculdade de análise e desenvolvimento de sistemas com foco em Java, e não só estudo como já estudei muitos cursos sobre programação e desenvolvimento de software, como exemplo tenho realizado os cursos da Rocketseat, StaartBR, Origamid e ProgramadorBR, todos estes são referências no mercado, conto com muitos projetos que mostram minhas habilidades em desenvolvimento.</p>
          </div>
      </section>
  );
}

export default About;