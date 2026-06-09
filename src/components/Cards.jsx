import { use, useState } from 'react';
import './card.css';

export function GeneralInfoCard(){
    console.log('General Info Card rerendered');
    const [nameValue, setNameValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [emailVal, setEmailValue] = useState('');

    function handleNameChange(e){
        console.log(e.target.value);
        setNameValue(e.target.value)
    }

    function handlePhoneChange(e){
         console.log(e.target.value);
        setPhoneValue(e.target.value)
    }

    function handleEmailChange(e){
         console.log(e.target.value);
        setEmailValue(e.target.value)
    }

    return (
        <div className='gi-container'>
           <span className='card-title'>General Information</span>
           <div className='name-wrapper'>
            <span>name:</span>
            <input type="text" name="name" id="name" placeholder='full name' onChange={handleNameChange}/>
           </div>
           <div className='phone-wrapper'>
            <span>phone #:</span>
            <input type="text" name="phone" id="phone" placeholder='0987654321' onChange={handlePhoneChange}/>
           </div>
           <div className='email-wrapper'>
            <span>email:</span>
             <input type="email" name="email" id="email" placeholder='whateverisyour@email.com' onChange={handleEmailChange}/>
           </div>
        </div>
    )
}

export function EducationExpCard({children}){
    console.log('Education Experience Card rerenderd');
    const [schoolVal, setSchoolVal] = useState('');
    const [titleVal, setTitleVal] = useState('');
    const [dateStartVal, setDateStartVal] = useState('');
    const [dateEndVal, setDateEndVal] = useState('');

    function handleSchoolChange(e){
        console.log(e.target.value);
        setSchoolVal(e.target.value)
    }
    function handleTitleChange(e){
        console.log(e.target.value);
        setTitleVal(e.target.value)
    }
    function handleDateStartChange(e){
        console.log(e.target.value);
        setDateStartVal(e.target.value)
    }
    function handleDateEndChange(e){
        console.log(e.target.value);
        setDateEndVal(e.target.value)
    }
    return (
        <div className='ee-container'>
           <div>
            <span>school name:</span>
            <input type="text" name="name" id="name" placeholder='school name' onChange={handleSchoolChange}/>
           </div>
           <div>
            <span>title of study:</span>
            <input type="text" name="phone" id="phone" placeholder='0987654321' onChange={handleTitleChange}/>
           </div>
           <div className='date-wrapper'>
            <div>
                <span>date start:</span>
                <input type="text" placeholder='mm/yy'onChange={handleDateStartChange}/>
            </div>
            <div>
                <span>date end:</span>
                <input type="text" placeholder='mm/yy' onChange={handleDateStartChange}/>
            </div>
            {children}
           </div>
        </div>
    )
}

export function PracticalExpCard(){
    const [companyVal, setCompanyVal] = useState('');
    const [positionVal, setPositionVal] = useState('');
    const [workRespVal, setWorkRespVal] = useState('');
    const [dateStartValPE, setDateStartValPE] = useState('');
    const [dateEndValPE, setDateEndValPE] = useState('');

    function handleCompanyChange(e){
        console.log(e.target.value);
        setCompanyVal(e.target.value);
    }
    function handlePositionChange(e){
        console.log(e.target.value);
        setPositionVal(e.target.value);
    }
    function handleWorkChange(e){
        console.log(e.target.value);
        setWorkRespVal(e.target.value);
    }
    function handleDateStartChangePE(e){
        console.log(e.target.value);
        setDateStartValPE(e.target.value)
    }
    function handleDateEndChangePE(e){
        console.log(e.target.value);
        setDateEndValPE(e.target.value);
    }
    return (
        <div className='pe-container'>
            <div className='first-part'>
                <div>
                    <span>company name:</span>
                    <input type="text" name="company-name" id="company-name" placeholder='company name' onChange={handleCompanyChange}/>
                </div>
                <div>
                    <span>position title:</span>
                    <input type="text" name="position-title" id="position-title" placeholder='whateveritis' onChange={handlePositionChange}/>
                </div>
            </div>
            <div className='second-part'>
                    <span>work responsibility: </span>
                    <textarea placeholder='what did you do during your work?' onChange={handleWorkChange}></textarea>
            </div>
            <div className='third-part'>
                <div>
                    <span>date start:</span>
                    <input type="text" placeholder='mm/yy' onChange={handleDateStartChangePE}/>
                </div>
                <div>
                    <span>date end:</span>
                    <input type="text" placeholder='mm/yy' onChange={handleDateEndChangePE}/>
                </div>
            </div>
        </div>
    )
}