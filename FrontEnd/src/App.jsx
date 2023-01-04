import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
console.log(JSON.parse(localStorage.getItem('user')))

function App() {

  return (
    <div>
      <Navbar />
      Home
    </div>
  )
}

export default App
