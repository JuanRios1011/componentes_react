import { useState } from 'react'
import Contador from './componentes/contador.jsx'
import TextoColor from './componentes/TextoColor.jsx'
import './App.css'

function App() {

  return (
    <>
     <h1>Contador con React</h1>
      <Contador paso={1}></Contador>

      <h1>Color de texto con React</h1>
      <TextoColor colorInicial="blue" texto="Este texto cambia de color"></TextoColor>
    </>
  )
}

export default App
