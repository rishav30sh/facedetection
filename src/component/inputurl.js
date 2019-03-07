import React from 'react'
import '../tachyons.css'
import '../index.css'
const Inputurl =() =>{
    return(
        <div className='mv5'>
            <div className='centeralign  '>
            <input name='url' 
                   type='link' 
                   placeholder="URL .." 
                   className="w-70 fl ba b--gray f3 h2 pa1  br2 centeralign"
                   />
            <button name='detect' 
                    className='f3 mw8 pa3 mw5 link b shadow-5 br2 near-white bg-dark-red pv2  bg-animate hover-near-black hover-bg-washed-red'
                    >
                    Detect    
            </button>
            </div>  
        </div>
    )
}

export default Inputurl