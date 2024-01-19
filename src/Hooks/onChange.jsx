//onChange => Event Handler used primarily with form elements
//          ex.<input> , <textarea> , <select> , <radio>
//          Triggers a function every time the value of the input changes

import { useState } from "react"
function OnChange(){


    //Normal Variable
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleQuantity = (e)=>{
        setQuantity(e.target.value)
    }
    return(
        <>

        <input type="text" onChange={handleName} />
        <h3>Name: {name}</h3>
        <br />
        <br />
        <input type="number" onChange={handleQuantity} />
        <h3>Quantity: {quantity}</h3>

        </>
    )

}
export default OnChange