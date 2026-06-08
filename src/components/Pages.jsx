import './pages-style.css';

export function EducationExpCardContainer({children}){
    return (
        <div className='ee-comp-container'>
            <div className='ee-header'>
              <span>Educational Experience</span>
              <span id='add-ee'>+</span>
            </div>
            <div className='component-container'>
              {children}
            </div>
        </div>
    )
}