import './pages-style.css';
import { EducationExpCard, PracticalExpCard } from './Cards.jsx';
import { useState } from 'react';

export function EducationExpCardContainer({children}){
    const [id, setId] = useState(0)
    const [components, setComponents] = useState([])
    function handleClick(){
        setComponents([...components, <EducationExpCard key={id}/>]);
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
              {components.map(component => component)};
            </div>
        </div>
    )
}


export function PracticalExpCardContainer({children}){
    const [id, setId] = useState(0)
    const [components, setComponents] = useState([])
    function handleClick(){
        setComponents([...components, <PracticalExpCard key={id}/>]);
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
              {components.map(component => component)};
            </div>
        </div>
    )
}

