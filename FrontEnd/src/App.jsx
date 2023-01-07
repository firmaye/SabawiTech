import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import HomePage from './components/HomePage'
function App() {
  if (JSON.parse(localStorage.getItem('user')) == null) {
    window.location.href = "http://localhost:8081/signin"
  }
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App
