import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import Signin from './components/signin'
import Signup from './components/signup'
function App() {

  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  )
}

export default App
