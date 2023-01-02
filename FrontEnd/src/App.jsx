import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}








export default App
