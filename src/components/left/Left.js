import React from 'react'
import './left.scss';


function Left({size,setsize})  {

function updateSize(newSize){
  setsize(newSize); 
  console.log(newSize);
}

let timeOut;
function handleInputChange(e){
    if(timeOut !== undefined){
        clearTimeout(timeOut);
    }
    timeOut = setTimeout(()=>updateSize(e.target.value),1000);
}

    return (
        <div className='left'>
            <h1 >SORTING <br /> VISUALIZATION</h1>
            
            <div className="left__controler">
                <div>
                    <span>Dark Mode</span>  <span><button type='button'></button></span>
                </div>

                <div>Input Size</div>
                <div> <input type='number' min='0' max='100' placeholder={`${size}`} onChange={handleInputChange} ></input> </div>

                <div>Initial Array</div>
                <div> <input type='option'></input> </div>

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
                    <input type="range" id="vol" name="vol" min="0" max="50"></input>
                </div>


            </div>

            <button>Start</button>
        </div>
    )
}



export default Left
