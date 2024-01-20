function UseState(){
  import { useState } from "react"


//Hook => Special Function that allows functional components to use React
//          features without writing class components 

// UseState() => A react hook that allows the creation of a stateful variable
//          and a setter function to update its value in the virtual DOM

function UseState(){
     
    const [name, setName] = useState("Guest") //Initial state
    const [age, setAge] = useState(0)
    const [isStudent, setIsStudent] = useState(false)

    const handleName = ()=>{
        setName("SpongeBob")
    }

    //Increment a Number
    const handleAge = ()=>{
        setAge(age+1)
    }

    //Toggle a Boolean 

    const handleBool = ()=>{
        setIsStudent(!isStudent)
    }
    return(
        <>
        <h1>Name :{name}</h1>
        <button onClick={handleName}>
            Set Name
        </button>
        <br />
        <br />
        <h1>Age:{age}</h1>
        <button onClick={handleAge}>
            Set Age
        </button>
        <br />
        <br />
        <h1>IsStudent: {isStudent ? "Yes":"No"}</h1>
        <button onClick={handleBool}>
            Is that Student?
        </button>
        </>
    )

}

export default UseState

}

export default UseState
