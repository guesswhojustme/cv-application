import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { GeneralInfoCard, EducationExpCard, PracticalExpCard } from './components/Cards.jsx';
import { EducationExpCardContainer, PracticalExpCardContainer, FillUpPage } from './components/Pages.jsx'

function App() {
  const [count, setCount] = useState(0)

  function handleSubmitClick(){
    console.log(count);
    setCount(count + 1)
  }
  return (
      <div>
        {count % 2 === 0 ? 
        <div className="app-container">
          <FillUpPage/>
          <span className='submit-spn' onClick={handleSubmitClick}>{`submit -->`}</span>
        </div> :
          <div className="app-container">
          <span className='submit-spn' onClick={handleSubmitClick}>{`<-- back`}</span>
        </div>}
      </div>
  )
}

export default App
