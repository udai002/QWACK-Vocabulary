import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Components/Navbar'
import Vocabulary from './Components/Vocabulary'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='z-40'>
      <Navbar />
    </div>
      <Vocabulary/>
      <Footer/>
    </>
  )
}

export default App
