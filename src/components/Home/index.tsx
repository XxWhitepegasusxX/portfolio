import React from 'react';
import Dimension from '../Dimension';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <section id='home'>
      <div className="text">
        <h3>Olá👋, meu nome é</h3>
        <h1>Alexander Almeida<br/>Eu construo experiências digitais.</h1>
        <p>Sou um desenvolvedor front end, especializado em criar experiências digitais. sou amplamente focado em aprender novas tecnologias e gosto de me desafiar.</p>
      </div>
      <div className="scene">
        <Dimension/>
      </div>
    </section>
  );
}

export default Home;