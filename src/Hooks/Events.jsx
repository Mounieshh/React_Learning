/* eslint-disable no-unused-vars */
function ClickEvent(){

    //Onclick Attribute
    const handleClick = ()=>{
        console.log("Hello Mouniesh");
    }

    //Onclick Attribute with parameters

    const handleClick2 =(name)=>{
        console.log("Hello "+name);
    }

    //Onclick with certain Conditions

    let count =0;
    const handleClick3 = (naem)=>{
        if (count < 4) {
            count++
            console.log("Click Me");
        }
        else{
            console.log("Don't Click Me");
        }
    }


    //Event Function

    const handleClick4 = (e)=> e.target.textContent = "OOUCH"
    return(
        <div>
            <button onClick={handleClick}>Click Me 😁</button>
            <br />
            <button onClick={(name)=>handleClick2("Mouniesh A")}>
                Click Me😀
            </button>

            <button onClick={(naem)=>handleClick3("Cuban")}>
                Click ME
            </button>
            <br />
            <br />
            <button onClick={(e)=>handleClick4(e)}>
                Click Me
            </button>
        </div>
    )
}

export default ClickEvent