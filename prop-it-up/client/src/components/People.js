import React from "react";

//Functional Component same as file name 'People'
//Use arrow function () group together all jsx parents and child
const People = (props) => {
    const {firstName, surName,hairColor, age } = props;
        return (
            <div>
                <h2> 
                    {firstName} {surName}
                </h2>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {hairColor} </h3>
            </div>
        )
};
//Export allows file to be found and used in other components like main app.js
export default People;