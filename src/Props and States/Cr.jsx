/* eslint-disable react/prop-types */
//Conditional Rendering => allows to control what gets rendered in your application based on certain conditions
                            //(show , hide, or change comonents)


import PropTypes from 'prop-types'
import './Cr.css'

function Cr(props){

    const welcomeMessage =  <h2 className="welcome-message">
                                                     Welcome {props.username}
                                                     </h2>

    const loginPrompt =     <h2 className="login-prompt">
                                             Please log in to continue..
                                             </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}


Cr.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
Cr.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default Cr