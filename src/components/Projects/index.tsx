import React from 'react';
import Webpage from '../Webpage';

// import { Container } from './styles';

const Projects = () => {
  return (
    <div id='projects'>
        <h1>Projetos</h1>
        <div className="grid">
            <Webpage name={'Waves-Music App'} image={'/images/wavesapp.png'} url={'https://wavesmusic-app.vercel.app'}/>
            <Webpage name={'The Creative Crew'} image={'/images/creativecrew.png'} url={'https://thecreativecrew.vercel.app'}/>
            <Webpage name={'Pedido Pago'} image={'/images/pedidopago.png'} url={'https://pedidopago-pp-challenge.vercel.app'}/>
            <Webpage name={'Video-Chat App'} image={'/images/reactchatapp.png'} url={'https://webreactchatapp.vercel.app'}/>
            <Webpage name={'Edie HomePage'} image={'/images/ediehomepage.png'} url={'https://ediehomepage-psi.vercel.app'}/>
            <Webpage name={'Beauty Salon WebPage'} image={'/images/originsixapp.png'} url={'https://beautysalon-originsix-taupe.vercel.app'}/>
        </div>
    </div>
  );
}

export default Projects;
