import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { GeneralInfoCard, EducationExpCard, PracticalExpCard } from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <PracticalExpCard></PracticalExpCard>
     </>
  )
}

export default App
