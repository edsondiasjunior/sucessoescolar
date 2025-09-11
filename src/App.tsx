// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Conteudo from './components/Conetudo'
import Cta from './components/Cta'
import { Depoimentos } from './components/Depoimentos'

function App() {


  return (
    <>
      <Hero/>
      <Conteudo/>
      <Cta/>
      <Depoimentos/>
    </>
  )
}

export default App
