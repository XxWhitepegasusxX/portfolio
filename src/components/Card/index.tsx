import React, { useState } from 'react';
import { motion } from 'framer-motion';

// import { Container } from './styles';

interface CardProps{
    title: string,
    description: string,
    icon: string,
}

const Card = ({title, description, icon}: CardProps) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div transition={{layout: {duration: .2}}} layout onClick={() => setIsOpen(!isOpen)} className='card'>
        <motion.div className='head'>
            <img src={icon} alt={title}/>
            <motion.h2>{title}</motion.h2>
        </motion.div>
        {isOpen && (
            <motion.div className='text'>
                <p>{description}</p>
            </motion.div>
            )}
    </motion.div>
  );
}

export default Card;