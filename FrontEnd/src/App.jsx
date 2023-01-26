import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import HomePage from './components/HomePage'
import Footer from './components/footer'
import CheckEmail from './components/CheckEmail'
function App() {
  // if (JSON.parse(localStorage.getItem('user')) == null) {
  //   window.location.href = "${import.meta.env.VITE_FRONTEND_URL}/signin"
  // }
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
