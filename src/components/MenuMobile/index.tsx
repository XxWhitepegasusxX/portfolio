/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'

// import { Container } from './styles';

interface MenuMobileProps{
    menuOpen: boolean;
    setMenuOpen: Function;
}

const MenuMobile = ({menuOpen, setMenuOpen}: MenuMobileProps) => {
  return (
    <div className="menu-mobile">
        <nav>
            <AiOutlineClose onClick={() => setMenuOpen(false)} size={50}/>
            <ul>
                <a href="#about"><li onClick={() => setMenuOpen(false)}>Sobre mim</li></a>
                <a href="#skills"><li onClick={() => setMenuOpen(false)}>Competências</li></a>
                <a href="#projects"><li onClick={() => setMenuOpen(false)}>Projetos</li></a>
                <a href="#contact"><li onClick={() => setMenuOpen(false)}>Contato</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default MenuMobile;