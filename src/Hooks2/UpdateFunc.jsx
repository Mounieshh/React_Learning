import { useState } from "react";

function Update(){

    //Updating Functions
    const [count , setCount] = useState(0)

    //Updating (Objects) using state variables
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model:"Mustang"
    })

    const handleClick = ()=>{
        setCount((count)=> count+2)
        // setCount((count)=>count+3)
    }

    function handleYear(e){
        setCar(c=>({...c, year: e.target.value}))
    }
    function handleMake(e){
        setCar(c=>({...c, make: e.target.value}))
    }
    function handleModel(e){
        setCar(c=>({...c, model: e.target.value}))
    }

    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleClick}>
                Click Me
            </button>


            <h3>
                Your Favourite car is {car.year} {car.make} {car.model}
                </h3><br />
                <input type="number" value={car.year} onChange={handleYear}/><br />
                <input type="text" value={car.make} onChange={handleMake}/> <br />
                <input type="text" value={car.model} onChange={handleModel}/> <br />
            
        </div>
    )
}

export default Update