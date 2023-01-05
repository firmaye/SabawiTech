import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import Signin from './components/signin'
import Signup from './components/signup'
import HomePage from './components/HomePage'
function App() {

  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App
