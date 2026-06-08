import './card.css';

export function GeneralInfoCard(){
    return (
        <div className='gi-container'>
           <span className='card-title'>General Information</span>
           <div className='name-wrapper'>
            <span>name:</span>
            <input type="text" name="name" id="name" placeholder='full name'/>
           </div>
           <div className='phone-wrapper'>
            <span>phone #:</span>
            <input type="text" name="phone" id="phone" placeholder='0987654321'/>
           </div>
           <div className='email-wrapper'>
            <span>email:</span>
             <input type="email" name="email" id="email" placeholder='whateverisyour@email.com'/>
           </div>
        </div>
    )
}

export function EducationExpCard(){
    return (
        <div className='ee-container'>
           <div>
            <span>school name:</span>
            <input type="text" name="name" id="name" placeholder='school name'/>
           </div>
           <div>
            <span>title of study:</span>
            <input type="text" name="phone" id="phone" placeholder='0987654321'/>
           </div>
           <div className='date-wrapper'>
            <div>
                <span>date start:</span>
                <input type="text" placeholder='mm/yy'/>
            </div>
            <div>
                <span>date end:</span>
                <input type="text" placeholder='mm/yy'/>
            </div>
           </div>
        </div>
    )
}

export function PracticalExpCard(){
    return (
        <div className='pe-container'>
            <span className='card-title'>Practical Experience</span>
            <div className='first-part'>
                <div>
                    <span>company name:</span>
                    <input type="text" name="company-name" id="company-name" placeholder='company name'/>
                </div>
                <div>
                    <span>position title:</span>
                    <input type="text" name="position-title" id="position-title" placeholder='whateveritis'/>
                </div>
            </div>
            <div className='second-part'>
                    <span>work responsibility: </span>
                    <textarea placeholder='what did you do during your work?'></textarea>
            </div>
            <div className='third-part'>
                <div>
                    <span>date start:</span>
                    <input type="text" placeholder='mm/yy'/>
                </div>
                <div>
                    <span>date end:</span>
                    <input type="text" placeholder='mm/yy'/>
                </div>
            </div>
        </div>
    )
}