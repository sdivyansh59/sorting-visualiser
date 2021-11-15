import React,{useEffect} from 'react'
import  './right.scss';

function Right({state,setstate,size}) {
    
    useEffect(() => {
    
    },[size,state]);

    return (
        <div className='right'>
            
                {state.map((obj,index)=>  (
                    <div  className="right__bar"  
                    style={
                        {
                            height: `${obj.value}%`,
                            width: `${Math.floor(70/size)}%`,
                            backgroundColor: `${ obj.compare ? 'white' : '#293451'}`,
                            color: 'white'
                        }
                        }
                        key={index}
                    >
                      {`${obj.value}`} 
                     </div>
                )
                )}
        
        </div>
    )
}

export default Right
