import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { GeneralInfoCard, EducationExpCard, PracticalExpCard } from './components/Cards.jsx';
import { EducationExpCardContainer, PracticalExpCardContainer } from './components/Pages.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='container'>
      <div className="gi-ee-container">
        <GeneralInfoCard/>
        <EducationExpCardContainer>
          <EducationExpCard/>
        </EducationExpCardContainer>
      </div>
      <div className='second-part'>
        <PracticalExpCardContainer>
           <PracticalExpCard/>
        </PracticalExpCardContainer>
      </div>
     </div>
  )
}

export default App
