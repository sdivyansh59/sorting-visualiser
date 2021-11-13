import React ,{useState,useEffect}from 'react'
import './App.scss';
import Home from './components/Home';



 function App() {

// const [array, setarray] = useState([])
// const [size, setsize] = useState(0)

// useEffect(() => {
//     initialiseArray(setarray,size)
//   }, []);



return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
