
export const  bubbleSort = ( state) => {  
  let arr = state.map((objArr)=> objArr );
  let history =[];

  // console.log("clicked");

  history.push(
       arr.map((a)=>{
          return {...a};
       } )
  )

for(let i = 0; i < arr.length; i++){
     
   // Last i elements are already in place  
   for(let j = 0; j < ( arr.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     arr[j].color ='white';
     arr[j+1].color ='white';
     
     history.push(
       arr.map((a)=>{
          return {...a};
       } )
     )

     if(arr[j].value > arr[j+1].value){

       arr[j].color ='#DC143C';    // red
       arr[j+1].color ='#DC143C';

      history.push(
       arr.map((a)=>{
          return {...a};
       } )
      )
       // If the condition is true then swap them
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp

      


     }
     else{
        arr[j].color ='#32CD32';   //green
        arr[j+1].color ='#32CD32';

        history.push(
        arr.map((a)=>{
          return {...a};
        } )
       );
     }

    arr[j].color ='#293451';  //blue
    arr[j+1].color ='#293451';

      history.push(
       arr.map((a)=>{
          return {...a};
       } )
      );

   }
 }

// print history arra
// console.log(history);


 
/*  Evert thing done just show 2nd last step as green and last step as default color  */


    // push sorted aray with all green color
     history.push(
       arr.map((a)=>{
          return {...a, color : "#32CD32"};
       } )
  )
   // push with default color
   history.push(
       arr.map((a)=>{
          return {...a};
       } )
  )
return history;
}
















//********* */ older  code  *********

// setTimeout(()=>{

//    for(let j = 0; j < ( state.length - i -1 ); j++){
       
//     console.log(i,j);
//     if(state[j].value > state[j+1].value){

//       setTimeout(()=>{   

//         setstate((arrObj)=>{
//           arrObj[j].compare =true;
//           arrObj[j+1].compare = true;
//           return [...arrObj]
//         });

//       },100);


      
//       setTimeout(()=>{
       
//         setstate((arrObj)=>{
//            arrObj[j].compare =false;
//            arrObj[j+1].compare = false;
//            return [...arrObj]
        
//         } );
    
//       },300);


//       setTimeout(()=>{
      
//        setstate((arrObj) => {
       
//         let temp = arrObj[j];
//         arrObj[j] = arrObj[j+1];
//         arrObj[j+1] = temp;
//         return [...arrObj]
//        });

//       },400); 
      
//     }

//    }
//  },interval)
//   interval+=1000;

//   if(i+1< state.length) {
//     setstate((state) => state)
//     outer(i+1);
//   }
