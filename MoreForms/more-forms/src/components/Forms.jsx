import React, {useState} from 'react';

const Forms = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [error, setError] = useState("");

    //ERRORS
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) =>{
         // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault(); 

        // create a javascript object to hold all of the values
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = {
            firstName: firstName,
            lastName:lastName,
            email: email, 
            password: password,
            confirmPassword: confirmPassword,
    };
        console.log("Welcome", newUser);
};

        //Error Handling Functions
        const handleFirstNameError = (e) => {
            setFirstName(e.target.value);
            // if the value of input is less than 2 then set error message. Else it will be empty.
            if (e.target.value.length < 2) {
                setFirstNameError(
                    "First name must be at least 2 characters long!"
                    )
                }
                else {
                    setFirstNameError("");                   
        };
    };

    const handleLastNameError = (e) => {
        setLastName(e.target.value);
        // if the value of input is less than 2 then set error message. Else it will be empty.
        if (e.target.value.length < 2) {
            setLastNameError(
                "Last name must be at least 2 characters long!"
                )
            }
            else {
                setLastNameError("");                   
    };
};

const handleEmailError = (e) => {
    setEmail(e.target.value);
    // if the value of input is less than 2 then set error message. Else it will be empty.
    if (e.target.value.length < 5) {
        setEmailError(
            "Email must be at least 5 characters long!"
            )
        }
        else {
            setEmailError("");                   
};
};

const handlePasswordError = (e) => {
    setPassword(e.target.value);
    // if the value of input is less than 2 then set error message. Else it will be empty.
    if (e.target.value.length < 8) {
        setPasswordError(
            "Passwords must be at least 8 characters long!"
            )
        }
        else {
            setPasswordError("");                   
};
};

const handleConfirmPasswordError = (e) => {
    setConfirmPassword(e.target.value);
    // if the value of input is less than 2 then set error message. Else it will be empty.
    if (e.target.value !== password || e.target.value.length < 8) {
        setConfirmPasswordError(
            "Passwords must match and be at least 8 characters long"
            )
        }
        else {
            setConfirmPasswordError("");                   
};
};

return(
    <div>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={ handleFirstNameError }/>
                {/* display message: using javascript function if condition ? true: false */}
                {firstNameError? <p>{firstNameError}</p>:""}
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange= { handleLastNameError }/>
                {lastNameError? <p>{lastNameError}</p>:""}
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange= { handleEmailError }/>
                {emailError? <p>{emailError}</p>:""}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange= { handlePasswordError }/>
                {passwordError? <p>{passwordError}</p>:""}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange= { handleConfirmPasswordError }/>
                {confirmPasswordError? <p>{confirmPasswordError}</p>:""}
            </div>
                <input type="submit" value="Create User"/>
        </form>
    <div>
            <label>First Name: {firstName}</label>
        </div>
        <div>
            <label>Last Name: {lastName}</label>
        </div>
        <div>
            <label>Email: {email}</label>
        </div>
        <div>
            <label>Password: {password}</label>
        </div>
        <div>
            <label>Confirm Password: {confirmPassword}</label>
            </div>
    </div>
    );
};

export default Forms;