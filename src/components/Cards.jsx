import './card.css';

export function GeneralInfoCard(){
    return (
        <div className='container'>
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