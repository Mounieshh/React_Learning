/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import PropTypes from 'prop-types'
import './PropComponent.css'

function PropComponent(props){

    return(
        <div className="student">
           <h3>Name: {props.name}</h3>
           <h3>Age: {props.age}</h3>
           <h3>Student: {props.isStudent ? "Yes":"No"}</h3>
        </div>
    )
}

PropComponent.propTypes = { //Use Camel Case Convention for declat=ring (propTypes)
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

PropComponent.defaultProps = { //Default Props are initially declared or showing varible thing
    name: "Guest",
    age: 0,
    isStudent: false,
};

export default PropComponent