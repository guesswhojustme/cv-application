import './pages-style.css';
import { GeneralInfoCard,EducationExpCard, PracticalExpCard } from './Cards.jsx';
import { useState } from 'react';

export function EducationExpCardContainer({props}){
    return (
        <div className='ee-comp-container'>
            <div className='ee-header'>
              <span>Educational Experience</span>
              <div>
                {props.educExp.length > 1 ? <span className='remove-spnEE' onClick={props.undoAddedEducExp}>{`<--`}</span> : null}
                <span id='add-ee' onClick={props.addEducExp}>+</span>
              </div>
            </div>
            <div className='ee-component-container'>
              {props.educExp.map(items => 
                <EducationExpCard 
                handleEducExpChange={props.handleEducExpChange} 
                educExp={items} idNum={items.id} key={items.id}/>
                )}
            </div>
        </div>
    )
}


export function PracticalExpCardContainer({props}){
    return (
        <div className='pe-comp-container'>
            <div className='pe-header'>
              <span>Practical Experience</span>
              <div>
                {props.pracExp.length > 1 ? <span className='remove-spnPE' onClick={props.undoAddedPracExp}>{`<--`}</span> : null}
                <span id='add-pe' onClick={props.addPracExp}>+</span>
              </div>
            </div>
            <div className='pe-component-container'>
              {props.pracExp.map(items => 
                <PracticalExpCard
                handlePracExpChange={props.handlePracExpChange} 
                pracExp={items} idNum={items.id} key={items.id}/>
                )}
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
          </EducationExpCardContainer>
        </div>
        <div className='second-part'>
          <PracticalExpCardContainer props={props}>
          </PracticalExpCardContainer>
        </div>
       </div>
    )
  }

export function DisplayDataPage({props}){
  return (
     <div className='data-container'>
        <h1>General Information</h1>
        <div className='general-info-container'>
          <div>
            <p>
              {props.generalInfo.name}
            </p>
            <span>name</span>
          </div>
          <div>
            <p>
              {props.generalInfo.email}
            </p>
            <span>email</span>
          </div>
          <div>
            <p>
              {props.generalInfo.phone}
            </p>
            <span>contact no.</span>
          </div>
        </div>
        <div className='line'></div>
        <h1>Educational Experience</h1>
        <div className='educ-exp-container'>
            <div>
              <span>school</span>
              <p>{props.educExp[0].schoolName}</p>
            </div>
            <div>
              <span>title of study</span>
              <p>{props.educExp[0].tof}</p>
            </div>
            <div>
              <span>start-end date</span>
              <p>{props.educExp[0].dateStart} - {props.educExp[0].dateEnd}</p>
            </div>
        </div>
        <div className='line'></div>
        <h1>Practical Experience</h1>
        <div className='prac-exp-container'>
            <div className="com-pt-date-wrapper">
              <div>
                <span>company</span>
                <p>{props.pracExp.companyName}</p>
              </div>
              <div>
                <span>position</span>
                <p>{props.pracExp.positionTitle}</p>
              </div>
              <div>
                <span>start-end date</span>
                <p>{props.pracExp.dateStart} - {props.pracExp.dateEnd}</p>
              </div>
            </div>
            <div>
              <span>work responsibility:</span>
              <p>{props.pracExp.workResp}</p>
            </div>
        </div>
     </div>
  )
}