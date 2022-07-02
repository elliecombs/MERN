import React, {useState} from 'react';

const UserReg = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

return(
    <div>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="passowrd">Password:</label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)}/>
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

export default UserReg;