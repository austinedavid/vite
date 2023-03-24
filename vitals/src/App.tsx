import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Map from './components/Map'

function App() {
  

  return (
    <div className="App">
        <Navbar/>
        <Map/>
    </div>
  )
}

export default App
