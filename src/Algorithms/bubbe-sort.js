export const  bubbleSort = (arrObj, setstate ,state) => {
//  let n = arr.size();
// let arr = arrObj.map( (obj) => obj.value);
     let interval;
let i = 0; 
i < arrObj.length; 
i++;
function outer ()  {
  
   let timer = 0; 
   setTimeout(()=>{

   for(let j = 0; j < ( arrObj.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
    
     if(arrObj[j].value > arrObj[j+1].value){

      setTimeout(()=>{
        arrObj[j].compare =true;
        arrObj[j+1].compare = true;
        setstate([...arrObj]) ;

      },100);


      
      setTimeout(()=>{
        arrObj[j].compare =false;
        arrObj[j+1].compare = false;
        setstate([...arrObj]) ;
    
      },300);


      setTimeout(()=>{
       let temp = arrObj[j].value;
       arrObj[j].value = arrObj[j + 1].value
       arrObj[j+1].value = temp;
       setstate([...arrObj]);
      },400); 
      
     }

   }
    },1000+timer)
    timer+=1000;

 }  
 outer (i);

 
     
   // Last i elements are already in place 
  
 

 // Print the sorted array

 console.log(arrObj);
 
//  return arrObj;
}
