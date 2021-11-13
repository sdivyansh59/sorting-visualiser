export const  bubbleSort = (arrObj ) => {
//  let n = arr.size();
// let arr = arrObj.map( (obj) => obj.value);
    
 for(var i = 0; i < arrObj.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( arrObj.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(arrObj[j].value > arrObj[j+1].value){

       var temp = arrObj[j].value
       arrObj[j].value = arrObj[j + 1].value
       arrObj[j+1].value = temp
     }
   }
 }

 // Print the sorted array

 console.log(arrObj);
 
 return arrObj;
}
