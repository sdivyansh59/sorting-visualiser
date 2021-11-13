import React,{useState} from 'react'
import './home.scss';

import Left from './left/Left'
import Right from './right/Right'
const  generator = require('random-array-generator');

// console.log();

function initialState(size=20) {
    let arr=generator.randomArray({min: 1, max: 49, elements: size});
    return arr.map( ele =>  ( { value : ele , color : 'yellow' }) );
}

function Home() {
    /*  
      Data structure 
      [{  
          value : value,
          color :color,

      } ,{} , {}, ....] 
    */
    const [size, setsize] = useState(20);
    const [state, setstate] = useState(initialState(size));

    return (
        <div className='home'>
           <Left size={size} setsize={setsize}/>
           <Right /> 
        </div>
    )
}

export default Home
