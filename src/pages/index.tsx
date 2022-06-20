/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import HomeSection from '../components/Home'
import MenuMobile from '../components/MenuMobile'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
    <Head>
      <title>Alexander Almeida</title>
    </Head>
    {menuOpen && <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <HomeSection/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default Home
