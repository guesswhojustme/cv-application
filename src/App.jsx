import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { GeneralInfoCard, EducationExpCard, PracticalExpCard } from './components/Cards.jsx';
import { EducationExpCardContainer } from './components/Pages.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <GeneralInfoCard/>
      <EducationExpCardContainer>
        <EducationExpCard/>
        <EducationExpCard/>
      </EducationExpCardContainer>
     </>
  )
}

export default App
