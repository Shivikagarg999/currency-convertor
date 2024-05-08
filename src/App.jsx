import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyConvertor from './components/CurrencyConvertor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-300 flex items-center justify-center'>
     <div className='container w-[40vw] mx-auto px-4 lg:px-8'><CurrencyConvertor/></div>
    </div>
  )
}

export default App
