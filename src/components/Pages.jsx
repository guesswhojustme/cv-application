import './pages-style.css';

export function EducationExpCardContainer({children}){
    return (
        <div className='ee-comp-container'>
            <div className='ee-header'>
              <span>Educational Experience</span>
              <span id='add-ee'>+</span>
            </div>
            <div className='ee-component-container'>
              {children}
            </div>
        </div>
    )
}


export function PracticalExpCardContainer({children}){
    return (
        <div className='pe-comp-container'>
            <div className='pe-header'>
              <span>Practical Experience</span>
              <span id='add-pe'>+</span>
            </div>
            <div className='pe-component-container'>
              {children}
            </div>
        </div>
    )
}

