import React,{useState, useEffect} from 'react'
import './home.scss';

import Left from './left/Left'
import Right from './right/Right'
const  generator = require('random-array-generator');

// console.log();

function initialState(size=20) {
    let arr=generator.randomArray({min: 10, max: 100, elements: size});
    return arr.map( ele =>  ( 
        {
            value : ele , 
            compare : false,
            sorted : false,
            color :  '#293451' ,
        
        }) );
}

function Home() {

    /*  
      Data structure 
      [{  
          
          value : value,
          color :color,
          compare : false,
          sorted : false,

      } ,{} , {}, ....] 
    */

    const [size, setsize] = useState(30);
    const [state, setstate] = useState(initialState(size));

    useEffect(() => {
        setstate(initialState(size));
    },[size]);

    return (
        <div className='home'>
           <Left size={size} setsize={setsize} state={state} setstate={setstate}/>
           <Right state={state} setstate={setstate} size={size}/> 
        </div>
    )
}

export default Home
