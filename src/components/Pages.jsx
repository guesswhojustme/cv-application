import './pages-style.css';
import { GeneralInfoCard,EducationExpCard, PracticalExpCard } from './Cards.jsx';
import { useState } from 'react';

export function EducationExpCardContainer({props, children}){
    const [id, setId] = useState(0)
    const [components, setComponents] = useState([])
    const [handeRemoveId, setHandleRemoveId] = useState()
    
    function createComponent(id){
      const obj = {
        id,
        component: <EducationExpCard key={id}></EducationExpCard>
      }
      return obj
    }

    function handleRemoveClick(){
      console.log("handleRemoveClick Func Triggered");
      const newComponent = () => {
        const newArr = []
        for(let i = 0; i < components.length - 1; i++){
          newArr.push(components[i])
        }
        return newArr;
      }
      
      setComponents(newComponent);
    }

    function handleClick(){
        console.log(components[0]);
        setComponents([...components, createComponent(id)]);
        console.log(components);
        setId(id + 1);
    }
    return (
        <div className='ee-comp-container'>
            <div className='ee-header'>
              <span>Educational Experience</span>
              <div>
                {components.length > 0 ? <span className='remove-spnEE' onClick={handleRemoveClick}>{`<--`}</span> : null}
                <span id='add-ee' onClick={handleClick}>+</span>
              </div>
            </div>
            <div className='ee-component-container'>
              {children}
              {components.map(items => items.component)}
            </div>
        </div>
    )
}


export function PracticalExpCardContainer({children}){
    const [id, setId] = useState(0)
    const [components, setComponents] = useState([])

    function createComponent(id){
      const obj = {
        id,
        component: <PracticalExpCard key={id}></PracticalExpCard>
      }
      return obj
    }

    function handleRemoveClick(componentId){
      const newComponent = () => {
        const newArr = []
        for(let i = 0; i < components.length - 1; i++){
          newArr.push(components[i])
        }
        return newArr;
      }
      
      setComponents(newComponent);
    }
    function handleClick(){
        setComponents([...components, createComponent(id)]);
        console.log(components);
        setId(id + 1);
    } 
    return (
        <div className='pe-comp-container'>
            <div className='pe-header'>
              <span>Practical Experience</span>
              <div>
                {components.length > 0 ? <span className='remove-spnPE' onClick={handleRemoveClick}>{`<--`}</span> : null}
                <span id='add-pe' onClick={handleClick}>+</span>
              </div>
            </div>
            <div className='pe-component-container'>
              {children}
              {components.map(items => items.component)}
            </div>
        </div>
    )
}


export function FillUpPage({props}){
  return (
       <div className='container'>
        <div className="gi-ee-container">
          <GeneralInfoCard handleGenInfoChange={props.handleGenInfoChange} genInfos={props.generalInfo}/>
          <EducationExpCardContainer props={props}>
            <EducationExpCard handleEducExpChange={props.handleEducExpChange} educExp={props.educExp}/>
          </EducationExpCardContainer>
        </div>
        <div className='second-part'>
          <PracticalExpCardContainer props={props}>
             <PracticalExpCard handlePracExpChange={props.handlePracExpChange} pracExp={props.pracExp}/>
          </PracticalExpCardContainer>
        </div>
       </div>
    )
  }