import './Card.css'

function Card(){
    return(
       <div className="card">
            <img className="card-image" src="./src/components/ocean-3605547_1280.jpg" alt="profile picture"></img>
            <h2 className="card-title">React Card Title</h2>
            <p className="card-text">I make Youtube videos and play video games</p>
       </div> 
    );
}
export default Card