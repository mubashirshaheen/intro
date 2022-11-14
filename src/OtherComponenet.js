import React,{useState} from "react";
function OtherComponent() {    
    const [count,setcount]=useState(0);
    const [greator,setgreator]=useState('')   ;
    function checkGreator(){
     setcount(count>=0?count+1:0,setgreator(''));
    };
    function checkLess(){
      setcount(count-1>=0?count-1:setgreator('No cant be less than 0'));
     };
    return (

      <>
        <p>Count is: {count}</p>
        <p>{greator}</p>
        <button onClick={()=>checkGreator()}>Increament</button>
        <br></br>
        <button onClick={()=>checkLess()}>Decreament</button>
      </>
    );
  }
  export default OtherComponent;
  