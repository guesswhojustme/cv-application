import './pages-style.css';
import { GeneralInfoCard,EducationExpCard, PracticalExpCard } from './Cards.jsx';
import { useState } from 'react';

export function EducationExpCardContainer({props, children}){
    const [id, setId] = useState(0)
    const [components, setComponents] = useState([])
  
    function createComponent(id, remove){
      const obj = {
        id,
        component: <EducationExpCard key={id}>{remove}</EducationExpCard>
      }
      return obj
    }

    function handleRemoveClick(componentId){
      const newComponent = () => {
        const newArr = []
        components.forEach(items => {
          if(items.id !== componentId){
            newArr.push(items);
          }
        })
        return newArr;
      }
      
      setComponents(newComponent);
    }

    function handleClick(){
        const remove = <span className='remove-spn' onClick={() => handleRemoveClick(id)}>remove</span>;
        console.log(components[0]);
        setComponents([...components, createComponent(id, remove)]);
        console.log(components);
        setId(id + 1);
    }
    return (
        <div className='ee-comp-container'>
            <div className='ee-header'>
              <span>Educational Experience</span>
              <span id='add-ee' onClick={handleClick}>+</span>
            </div>
            <div className='ee-component-container'>
              {children}
              {components.map(items => items.component)};
            </div>
        </div>
    )
}


export function PracticalExpCardContainer({children}){
    const [id, setId] = useState(0)
    const [components, setComponents] = useState([])

    function createComponent(id, remove){
      const obj = {
        id,
        component: <PracticalExpCard key={id}>{remove}</PracticalExpCard>
      }
      return obj
    }

    function handleRemoveClick(componentId){
      const newComponent = () => {
        const newArr = []
        components.forEach(items => {
          if(items.id !== componentId){
            newArr.push(items);
          }
        })
        return newArr;
      }
      
      setComponents(newComponent);
    }
    function handleClick(){
        const remove = <span className='remove-spn2' onClick={() => handleRemoveClick(id)}>remove</span>;
        setComponents([...components, createComponent(id, remove)]);
        console.log(components);
        setId(id + 1);
    } 
    return (
        <div className='pe-comp-container'>
            <div className='pe-header'>
              <span>Practical Experience</span>
              <span id='add-pe' onClick={handleClick}>+</span>
            </div>
            <div className='pe-component-container'>
              {children}
              {components.map(items => items.component)};
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
          <PracticalExpCardContainer>
             <PracticalExpCard handlePracExpChange={props.handlePracExpChange} pracExp={props.pracExp}/>
          </PracticalExpCardContainer>
        </div>
       </div>
    )
  }