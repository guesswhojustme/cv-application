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

export function EducationExpCard({handleEducExpChange, educExp}){
    console.log('Education Experience Card rerenderd');
    return (
        <div className='ee-container'>
           <div>
            <span>school name:</span>
            <input type="text" name="schoolName" id="name" placeholder='school name'/>
           </div>
           <div>
            <span>title of study:</span>
            <input type="text" name="tof" id="phone" placeholder='0987654321'/>
           </div>
           <div className='date-wrapper'>
            <div>
                <span>date start:</span>
                <input type="text" name='dateStart' placeholder='mm/yy'/>
            </div>
            <div>
                <span>date end:</span>
                <input type="text" name='dateEnd' placeholder='mm/yy'/>
            </div>
           </div>
        </div>
    )
}

export function PracticalExpCard({handlePracExpChange, pracExp}){
    console.log('Practical Exp Card rerendered');

    return (
        <div className='pe-container'>
            <div className='first-part'>
                <div>
                    <span>company name:</span>
                    <input type="text" name="companyName" id="company-name" placeholder='company name'/>
                </div>
                <div>
                    <span>position title:</span>
                    <input type="text" name="positionTitle" id="position-title" placeholder='whateveritis'/>
                </div>
            </div>
            <div className='second-part'>
                    <span>work responsibility: </span>
                    <textarea name='workResp' placeholder='what did you do during your work?'></textarea>
            </div>
            <div className='third-part'>
                <div>
                    <span>date start:</span>
                    <input type="text" placeholder='mm/yy' name='dateStart'/>
                </div>
                <div>
                    <span>date end:</span>
                    <input type="text" placeholder='mm/yy' name='dateEnd'/>
                </div>
            </div>
        </div>
    )
}