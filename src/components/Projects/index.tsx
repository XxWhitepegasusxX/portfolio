import React from 'react';
import Webpage from '../Webpage';

// import { Container } from './styles';

const Projects: React.FC = () => {
  return (
    <div id='projects'>
        <h1>Projetos</h1>
        <div className="grid">
            <Webpage name={'Waves-Music App'} image={'/images/wavesapp.png'} url={'https://wavesmusic-app.vercel.app'}/>
            <Webpage name={'The Creative Crew'} image={'/images/creativecrew.png'} url={'https://thecreativecrew.vercel.app'}/>
            <Webpage name={'Pedido Pago'} image={'/images/pedidopago.png'} url={'https://pedidopago-pp-challenge.vercel.app'}/>
        </div>
    </div>
  );
}

export default Projects;