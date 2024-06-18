import { useState } from 'react'
import './App.css'
import { PortfolioCC } from './components/PortfolioCC/PortfolioCC'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PortfolioCC />
    </>
  )
}

export default App
