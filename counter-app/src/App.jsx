import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount] = useState(0);
const [input,setInput] = useState(0);
const [inputVisibility,setInputVisibility] = useState(true)

  return (
    <>
     <div className='counter'>
      <button style={{margin:"10px"}} onClick={()=>{
        // setInputVisibility(!inputVisibility)
        if(inputVisibility){
          setInputVisibility(false)
        }else{
          setInputVisibility(true)
        }
      }}>Toggle visibility input tag </button>
      {
        inputVisibility && (
          <input type="number" value={input} onChange={(event)=>{
            console.log(event.target.value)
            setInput(event.target.value)
          }}/>
        )
      }
     
      <button style={{margin:"10px"}} onClick={()=>{
        setCount(parseInt(input));
        setInput(0)
      }}>set counter value </button>
      <button onClick={()=>{
        setCount(count+1)
      }}>count-{count}</button>
     </div>
    </>
  )
}

export default App
