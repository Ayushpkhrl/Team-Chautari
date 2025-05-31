import { useState } from 'react'
import './App.css'
import Header from './components/navbar/Header'
import Landingpage from './pages/Landingpage'
import Card from './components/content/Card'
import Hero from './components/content/hero'





function App() {
  const user="oll"
  const UserName="Ayush";
  const city ="Gachhiya";
  
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (                 
    <>
   <Landingpage/>




    </>
  )
}

export default App
