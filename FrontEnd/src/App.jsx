import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
console.log(JSON.parse(localStorage.getItem('user')))

function App() {
  if (JSON.parse(localStorage.getItem('user')) == null) {
    window.location.href = "http://localhost:8081/signin"
  }
  return (
    <div>
      <Navbar />
      Home
    </div>
  )
}

export default App
