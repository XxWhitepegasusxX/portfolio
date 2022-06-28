/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

// import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <div id='contact'>
        <h1>Contato</h1>
        <div className="grid">
            <div className="contact">
            <h2>Email:</h2>
            <a href="mailto:alexanderalmeida3040@gmail.com"><p>alexanderalmeida3040@gmail.com</p></a>
            </div>
            <div className="contact">
            <h2>LinkedIn:</h2>
            <a href="https://www.linkedin.com/in/alexander-almeida-dev"><p>alexander-almeida-dev</p></a>
            </div>
            <div className="contact">
            <h2>GitHub:</h2>
            <a href="https://github.com/XxWhitepegasusxX"><p>XxWhitePegasusxX</p></a>
            </div>
        </div>
        <div className="button">
            <a target="_blank" href="https://flowcv-user-file-uploads-prod.s3.eu-central-1.amazonaws.com/websiteButton/e6kmcdee6ef4e2da6xvk2jrucb.pdf"><button>Meu Currículo</button></a>
        </div>
    </div>
  );
}

export default Contact;