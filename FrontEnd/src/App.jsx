import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Home'
import HomePage from './components/HomePage'
import Footer from './components/footer'
import CheckEmail from './components/CheckEmail'
import Loading from './components/Loading'
import FadeIn from 'react-fade-in/lib/FadeIn'
function App() {
  // if (JSON.parse(localStorage.getItem('user')) == null) {
  //   window.location.href = "${import.meta.env.VITE_FRONTEND_URL}/signin"
  // }

  const [loading, setloading] = useState(true)

  useEffect(() => {

    if (JSON.parse(localStorage.getItem('user')) != null) {
      let userid = JSON.parse(localStorage.getItem('user')).id
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userid}`).then(res => res.json()).then(result => {
        if (result.profilePhoto == undefined || result.profilePhoto == "") {
          let direction = 0
          if (result.verified) {

            if (result.source == "google") {
              direction = 1
            } else {
              direction = 0
            }
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/extradetail/${direction}`
          } else {
            window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/signin`
          }
        } else {
          setloading(false)
        }
      }).catch((error) => { });
    } else {
      setloading(false)
    }
  }, [])
  if (loading) {
    return (
      <Loading />)
  }
  return (
    <div>
      <FadeIn>
        <Navbar />
        <HomePage />
        <Footer />
      </FadeIn>
    </div>
  )
}

export default App
