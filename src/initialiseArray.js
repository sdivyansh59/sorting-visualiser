
function randomiseArray(arr,size){
    for(let i=0;i<size;i++){
      let x=Math.random()*10*Math.random()*10
      arr[i]={
          value: x,
          color: 'blue',
      }
  }
}

export default function initialiseArray(setarray,setcolor,size){
  const arr=new Array(size)
  randomiseArray(arr,size);
  setarray(arr); 
}