import React,{useState, useEffect, useRef} from 'react'
import './home.scss';
import Left from './left/Left'
import Right from './right/Right'
const  generator = require('random-array-generator');



function initialState(size=20) {
    let arr=generator.randomArray({min: 10, max: 100, elements: size});
    let newArr = arr.map( ele =>  ( 
        {
            value : ele , 
            compare : false,
            sorted : false,
            color :  '#293451' 
        }) );
    return newArr;
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
  

    const [size, setsize] = useState(20);
    const [state, setstate] = useState(initialState(size));
    const [speed ,setSpeed]  = useState(300); 
    let [history,sethistory] = useState([]);
    //  let h =[]
    //     h.push(
    //         state.map((a)=>{
    //           return   {...a};
    //         })
    //     )
    //     return h;


//      function initialiseHistory(){
//        let h= []
//        let arr= state.map((obj)=> obj);
//        h.push(arr);
//        sethistory(h);
//    }
    const [playing, setplaying] = useState(false);
    const [index ,setindex] = useState(0);
    const timeoutRef = useRef();

   useEffect(()=>{
        setplaying(false);
        setindex(0);
        clearTimeout(timeoutRef.current);
        sethistory([]);
        setstate(initialState(size));
        // Now makaing changed
       
        sethistory([]);
       
   },[size])

    useEffect(() => {
       
        if(index>0) setstate( history[index])
    },[index]);

    useEffect(()=>{
        console.log("useEffect called", history.length,index)
        if(  playing && index < history.length-1){
              clearTimeout(timeoutRef.current);
              timeoutRef.current = 
            setTimeout(()=>{
                console.log(index,playing);
                setindex( (index)=>index+1);
            },speed);

        }else{
            if(index>=history.length)  setplaying(false); 
            console.log("playing",playing)
        }
    },[index,playing]);
    // history add nahi karne pe error aa rahi hai
    // add dependency history or remove it

    return (
        <div className='home'>
           <Left 
           size={size}  
           setsize={setsize} 
           state={state}      
           history={history} 
           setplaying={setplaying}   
           sethistory={sethistory}
           setindex={setindex} 
           setSpeed={setSpeed}
           playing = {playing}
           />

           <Right 
           state={state} 
           size={size}
           /> 
        </div>
    )
}

export default Home
