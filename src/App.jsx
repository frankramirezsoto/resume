import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Main from './sections/Main'

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <main className='bg-base-100 min-h-screen' />
    </>
  )
}

export default App
