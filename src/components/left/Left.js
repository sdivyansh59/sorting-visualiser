import React from 'react'
import './left.scss';
import { bubbleSort } from '../../Algorithms/bubbe-sort';


function Left({size,setsize,state,setplaying,sethistory,setindex})  {  

const handleClick = () => {
 sethistory(bubbleSort(state))   
 setplaying(true);
//  setindex((index)=> index+1)
}    

function updateSize(newSize){
  setsize(newSize); 
//   history = [];
  console.log(newSize);
}


let timeOut;
function handleInputChange(e){
    if(timeOut !== undefined){
        clearTimeout(timeOut);
    }
    timeOut = setTimeout(()=>updateSize(e.target.value),500);
}

    return (
        <div className='left'>
            <h1 >SORTING <br /> VISUALIZATION</h1>
            
            <div className="left__controler">
                {/* <div>
                    <span>Dark Mode</span>  <span><button type='button'></button></span>
                </div> */}

                <div>Input Size</div>
                <div> <input type='range' min='5' max='50'  onChange={handleInputChange} ></input> </div>

                {/* <div>Initial Array</div>
                <div> <input type='option'></input> </div> */}

                <div>Sorting Algorithm</div>
                <div><select name="Sorting Algo" id="sorting-algo">
                       <option value="Bubble Sort">Bubble Sort</option>
                       <option value="Insertion Sort">Insertion Sort</option>
                       <option value="Merge Sort">Merge Sort</option>
                       <option value="Quick Sort">Quick Sort</option>
                     </select>
                </div>

                <div>Speed</div> 
                <div>
                    <input type="range" id="vol" name="vol" min="1" max="20"></input>
                </div>


            </div>

            <button onClick={handleClick}>Start</button>
        </div>
    )
}



export default Left
