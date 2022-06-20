/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

// import { Container } from './styles';

interface WebpageProps{
    image: string,
    name: string,
    url: string,
}

const Webpage = ({image, name, url}: WebpageProps) => {
  return (
    <div className="page">
      <a target="_blank" href={url}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{url}</p>
      </a>
    </div>
  );
}

export default Webpage;