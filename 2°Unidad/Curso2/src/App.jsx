import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'
import ContactForm from './components/ContactForm.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Products/>
      <ContactForm/>
    </>
  )
}

export default App
