import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import HomePage from './components/HomePage'
import Footer from './components/footer'
function App() {
  if (JSON.parse(localStorage.getItem('user')) == null) {
    window.location.href = "http://localhost:8081/signin"
  }
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
