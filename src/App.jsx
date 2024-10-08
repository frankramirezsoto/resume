import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-primary dark:bg-dark min-h-screen'>
      <Navbar />
    
    </main>
  )
}

export default App
