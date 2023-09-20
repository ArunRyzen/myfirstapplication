import React,{useEffect,useState} from "react";
const Sample=()=>{
  const[isShow,SetisShow]=useState(false);
  const[count,setcount]=useState(0)
  useEffect(()=>{
    console.log("did mounting")
    {
      return()=>(
        console.log("unmounting")
      )
    }
  },[])
  useEffect(()=>{
    console.log("did update")
  },[count])
  const buttonOnclick=()=>{
    SetisShow(!isShow)
  }
  const increment=()=>{
    setcount(count+1)
  }
  const decrement=()=>{
    setcount(count-1)
  }


  return(
  <div>
    <h1>{isShow ? "Hide counter" : "Show counter"}</h1>
    <button onClick={buttonOnclick}>click</button> 
    {isShow ?(<div>
    <h1>count:{count}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <Childcomponent/>
    </div>
    ):null
    }
  </div>
  )
}
const Childcomponent=()=>{
  useEffect(()=>{
    console.log("childcomponent")
    return()=>{
      console.log("the child component unmounted")
    }
  },[])
}
export default Sample;