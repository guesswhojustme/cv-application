import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FillUpPage, DisplayDataPage } from './components/Pages.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(2);
  const [generalInfo, setGeneralInfo] = useState({name: '', phone: '', email: ''});
  const [educExp, setEducExp] = useState([{id: 0, schoolName: '', tof: '', dateStart: '', dateEnd: ''}])
  const [pracExp, setPracExp] = useState([{id: 1, companyName: '', positionTitle: '', workResp: '', dateStart: '', dateEnd: ''}])
  console.log('refreshed the App component');
  
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

    function addEducExp(){
      setEducExp(prev => ([...prev, {id: id, schoolName: '', tof: '', dateStart: '', dateEnd: ''}]))
    }

    function addPracExp(){
      setPracExp(prev => ([...prev, {id: id, companyName: '', positionTitle: '', workResp: '', dateStart: '', dateEnd: ''}]))
    }

    function undoAddedEducExp(){
      console.log("undoAddedExp Func Triggered");
      const newComponent = () => {
        const newArr = []
        for(let i = 0; i < educExp.length - 1; i++){
          newArr.push(educExp[i])
        }
        return newArr;
      }
      
      setEducExp(newComponent);  
    }

    function undoAddedPracExp(){
      console.log("undoAddedExp Func Triggered");
      const newComponent = () => {
        const newArr = []
        for(let i = 0; i < pracExp.length - 1; i++){
          newArr.push(pracExp[i])
        }
        return newArr;
      }
      
      setPracExp(newComponent);  
    }

    function handleEducExpChange(e){
        const {className, name, value} = e.target;
        console.log(educExp);

        function change(){
          const newData = [];
          for(let i = 0; i < educExp.length; i++){
            if(educExp[i].id === parseInt(className)){
              educExp[i][name] = value
              newData.push(educExp[i])
            }else{
              newData.push(educExp[i])
            }
          }
          return newData;
        }

        setEducExp(change);
    }

    function handlePracExpChange(e){
        const {className, name, value} = e.target;
        console.log(pracExp);

        function change(){
          const newData = [];
          for(let i = 0; i < pracExp.length; i++){
            if(pracExp[i].id === parseInt(className)){
              pracExp[i][name] = value
              newData.push(pracExp[i])
            }else{
              newData.push(pracExp[i])
            }
          }
          return newData;
        }

        setPracExp(change);
    }
  function handleSubmitClick(){
    console.log(count);
    setCount(count + 1)
  }
  return (
      <div className='pages-container'>
        {count % 2 === 0 ? 
        <div className="app-container">
          <FillUpPage props={{
            handleGenInfoChange, 
            handleEducExpChange, 
            handlePracExpChange, 
            generalInfo, educExp, 
            addEducExp, pracExp,
            undoAddedEducExp,
            addPracExp, undoAddedPracExp
            }} />
          <span className='submit-spn' onClick={handleSubmitClick}>{`submit -->`}</span>
        </div> :
          <div className="app-container">
          <span className='submit-spn' onClick={handleSubmitClick}>{`<-- back`}</span>
          <DisplayDataPage props={{generalInfo, educExp, pracExp}}/>
        </div>}
      </div>
  )
}

export default App
