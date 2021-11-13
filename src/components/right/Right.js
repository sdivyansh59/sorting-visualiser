import React from 'react'
import  './right.scss';

function Right({array}) {
    
    return (
        <div className='right'>
            <div className='right__bar'>1111111
                {/* {array.map((eleObj)=>(
                 <div style={{color: `${eleObj.color}` , width:`${100/array.length}%` , height:`${array.value}`}}> 
                   {}
                  </div>)
                )} */}
            </div> 
        </div>
    )
}

export default Right
