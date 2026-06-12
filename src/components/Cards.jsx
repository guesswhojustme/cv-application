import { use, useState } from 'react';
import './card.css';

export function GeneralInfoCard({handleGenInfoChange, genInfos}){
    console.log('General Info Card rerendered');

    return (
        <div className='gi-container'>
           <span className='card-title'>General Information</span>
           <div className='name-wrapper'>
            <span>name:</span>
            <input type="text" name="name" id="name" placeholder='full name' onChange={handleGenInfoChange} value={genInfos.name}/>
           </div>
           <div className='phone-wrapper'>
            <span>phone #:</span>
            <input type="text" name="phone" id="phone" placeholder='0987654321' onChange={handleGenInfoChange} value={genInfos.phone}/>
           </div>
           <div className='email-wrapper'>
            <span>email:</span>
             <input type="email" name="email" id="email" placeholder='whateverisyour@email.com' onChange={handleGenInfoChange} value={genInfos.email}/>
           </div>
        </div>
    )
}

export function EducationExpCard({handleEducExpChange, educExp, idNum}){
    console.log('Education Experience Card rerenderd');
    return (
        <div className='ee-container'>
           <div>
            <span>school name:</span>
            <input className={idNum} type="text" name="schoolName" id="name" placeholder='school name' onChange={handleEducExpChange} value={educExp.schoolName}/>
           </div>
           <div>
            <span>title of study:</span>
            <input className={idNum} type="text" name="tof" id="phone" placeholder='0987654321' onChange={handleEducExpChange} value={educExp.tof}/>
           </div>
           <div className='date-wrapper'>
            <div>
                <span>date start:</span>
                <input className={idNum} type="text" name='dateStart' placeholder='mm/yy' onChange={handleEducExpChange} value={educExp.dateStart}/>
            </div>
            <div>
                <span>date end:</span>
                <input className={idNum} type="text" name='dateEnd' placeholder='mm/yy' onChange={handleEducExpChange} value={educExp.dateEnd}/>
            </div>
           </div>
        </div>
    )
}

export function PracticalExpCard({handlePracExpChange, pracExp, idNum}){
    console.log('Practical Exp Card rerendered');
    return (
        <div className='pe-container'>
            <div className='first-part'>
                <div>
                    <span>company name:</span>
                    <input className={idNum} type="text" name="companyName" id="company-name" placeholder='company name' onChange={handlePracExpChange} value={pracExp.companyName}/>
                </div>
                <div>
                    <span>position title:</span>
                    <input className={idNum} type="text" name="positionTitle" id="position-title" placeholder='whateveritis' onChange={handlePracExpChange} value={pracExp.positionTitle}/>
                </div>
            </div>
            <div className='second-part'>
                    <span>work responsibility: </span>
                    <textarea className={idNum} name='workResp' placeholder='what did you do during your work?' onChange={handlePracExpChange} value={pracExp.workResp}></textarea>
            </div>
            <div className='third-part'>
                <div>
                    <span>date start:</span>
                    <input className={idNum} type="text" placeholder='mm/yy' name='dateStart' onChange={handlePracExpChange} value={pracExp.dateStart}/>
                </div>
                <div>
                    <span>date end:</span>
                    <input className={idNum} type="text" placeholder='mm/yy' name='dateEnd' onChange={handlePracExpChange} value={pracExp.dateEnd}/>
                </div>
            </div>
        </div>
    )
}