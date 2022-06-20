/* eslint-disable @next/next/no-html-link-for-pages */
import { Avatar, Show } from '@chakra-ui/react';
import React from 'react';
import {CgMenuRightAlt} from 'react-icons/cg'

// import { Container } from './styles';

interface HeaderProps{
    menuOpen: boolean,
    setMenuOpen: Function,
}

const Header = ({menuOpen, setMenuOpen}: HeaderProps) => {
  return (
    <header>
        <a href={'/'}>
            <div className="logo">
                <Avatar className='avatar' name='Alexander' src='/images/profile-pic.png'/>
                <h2>Alexander <span>Almeida</span></h2>
            </div>
        </a>
        
        <div className="menu">
            <ul>
                <a href="#about">
                    <li>Sobre mim</li>
                </a>
                <a href="#skills">
                    <li>Competências</li>
                </a>
                <a href="#projects">
                    <li>Projetos</li>
                </a>
                <a href="#contact">
                    <li>Contato</li>
                </a>
            </ul>
        </div>
        <CgMenuRightAlt onClick={() => setMenuOpen(true)} size={50}/>
    </header>
  )
}

export default Header;