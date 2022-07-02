import React, { useState } from "react";

//Functional Component same as file name 'People'
//Use arrow function () group together all jsx parents and child
const PersonCard = (props) => {
    const {firstName, surName,hairColor, age } = props;
    const [ initialAge, setAge ] = useState(props.age);
    console.log(initialAge);
        return (
            <div>
                <h2> 
                    {firstName} {surName}
                </h2>
                <h3>Age: {initialAge}</h3>
                <h3>Hair Color: {hairColor} </h3>
                <button onClick={ ()=> setAge(initialAge + 1)} > Birthday Button for {firstName} {surName} </button>
            </div>
        )
};
//Export allows file to be found and used in other components like main app.js
export default PersonCard;