import { useState } from "react"
function UpdateArr(){
//Updating and Removing Arrays Using "useState" Hook 
const [food ,setFood] = useState(["Apple","Orange","Banana"]);

function handleAdd(){
    const newFood = document.getElementById("foodInput").value
    document.getElementById("foodInput").value = ""
    setFood([...food, newFood])
}

function handleRemove(index){

    setFood(food.filter((_, i) => i!==index))
}
    return(
        <>
    <h2>
        List of Foods
    </h2>

    <ul>
        {food.map((food, index)=> <li key={index} onClick={()=>handleRemove(index)}>
            {food} </li>)}
    </ul>

    <input type="text" id="foodInput" placeholder="Enter Food"/>
    <button onClick={handleAdd}>Add Food</button>
        </>
    )
}

export default UpdateArr