//useEffect => React Hook that tells React to Do Some code When:
//              This Component re-renders
//              This Component mounts
//              The state of a value


//useEffect(function , [dependencies])

//1.useEffect(()=> {})  //Runs after every re-render
//2.useEffect(()=> {},[]) //Runs only on mount
//3.useEffect(()=> {},[value])  //Runs on mount +when value changes

import { useState ,useEffect } from "react";

function UseEffect(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function addCount(){
        setCount(count+1)
    }

    function changeColor(){
        setColor(c => c==="green" ? "red" : "green")
    }
    //Using UseEffect Hook (re-render)

    useEffect(()=> {
        document.title = "Count"
    }, [])

    //Using single Dependency

    useEffect(()=> {
        document.title = `Count : ${count}`
    }, [count])

    //Using Multiple Dependencies

    useEffect(()=> {
        document.title = `Count :${count} : ${color}`
    }, [count, color])

    return(
        <>
        <h2 style={{color: color}}>Count:{count}</h2>
        <button onClick={addCount}>
            Add
        </button>

        <button onClick={changeColor}>
            ChangeColor
        </button>
        </>
    )
}

export default UseEffect