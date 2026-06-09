import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { GeneralInfoCard, EducationExpCard, PracticalExpCard } from './components/Cards.jsx';
import { EducationExpCardContainer, PracticalExpCardContainer, FillUpPage } from './components/Pages.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [generalInfo, setGeneralInfo] = useState({name: '', phone: '', email: ''});
  const [educExp, setEducExp] = useState({schoolName: '', tof: '', dateStart: '', dateEnd: ''})
  const [pracExp, setPracExp] = useState({companyName: '', positionTitle: '', workResp: '', dateStart: '', dateEnd: ''})

    function handleGenInfoChange(e){
        const {name, value} = e.target;
        // console.log(`name input: ${generalInfo.name}`);
        // console.log(`phone input: ${generalInfo.phone}`);
        // console.log(`email input: ${generalInfo.email}`);
        setGeneralInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleEducExpChange(e){
        const {name, value} = e.target;
        // console.log(`school input: ${educExp.schoolName}`);
        // console.log(`tof input: ${educExp.tof}`);
        // console.log(`date start input: ${educExp.dateStart}`);
        // console.log(`date end input: ${educExp.dateEnd}`);
        
        setEducExp(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handlePracExpChange(e){
        const {name, value} = e.target;

        setPracExp(prev => ({
            ...prev,
            [name]: value
        }))
    }
  function handleSubmitClick(){
    console.log(count);
    setCount(count + 1)
  }
  return (
      <div>
        {count % 2 === 0 ? 
        <div className="app-container">
          <FillUpPage props={{handleGenInfoChange, handleEducExpChange, handlePracExpChange, generalInfo, educExp, pracExp}} />
          <span className='submit-spn' onClick={handleSubmitClick}>{`submit -->`}</span>
        </div> :
          <div className="app-container">
          <span className='submit-spn' onClick={handleSubmitClick}>{`<-- back`}</span>
        </div>}
      </div>
  )
}

export default App
