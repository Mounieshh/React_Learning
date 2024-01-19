/* eslint-disable no-unused-vars */
import { useState } from "react";

function UpdateObj(){

    const [cars, setCars] = useState([])
    const [year1, setYear] = useState(new Date().getFullYear());
    const [make1, setMake] = useState("")
    const [model1, setModel] = useState("")

    function handleAdd(){
        const newCar = {
            year: year1,
            make:make1,
            model:model1,
        }
        setCars(c=> [...cars, newCar])
        year1(new Date().getFullYear())
        make1("")
        model1("")
    }
    function handleRemove(index){
        setCars(c=> c.filter((_,i)=> i!==index))
    }

    function handleYear(e){
        setYear(e.target.value)
    }
    function handleMake(e){
        setMake(e.target.value)
    }
    function handleModel(e){
        setModel(e.target.value)
    }

    return(
        <>
        <h2>Car Objects </h2>
            <ul>
                {cars.map((car, index)=> <li key={index} onClick={handleRemove}>
                    {car.year} {car.make}{car.model}
                </li>)}
            </ul>

            <input type="number" id="inputCar" onChange={handleYear} placeholder="Enter Year" /><br />
            <input type="text" id="inputCar"onChange={handleMake} placeholder="Enter make"/><br />
            <input type="text"id="inputCar" onChange={handleModel} placeholder="Enter model"/><br />

            <button onClick={handleAdd}>
                Add Car
            </button>
        </>
    )

}

export default UpdateObj