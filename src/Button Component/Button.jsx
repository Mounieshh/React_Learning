import './Button.css'
import styles from './Button.module.css'


//Inline CSS
const style = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "black",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
}

function Button(){

    return(
        <>
        <button className="button">
            Click Me (External CSS)
        </button>
<br />
<br />
        <button className={styles.button2}>
            Click Me  (Module CSS)
        </button>
<br />
<br />    
        
        <button style={style}>
            Click Me (inline CSS)
        </button>
        </>
    )
}
export default Button