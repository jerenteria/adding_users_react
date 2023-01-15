import React, { useState } from 'react';
// .. means go out of current folder in this case Users and then go into components then UI then into Card.js
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const AddUser = props => {
    // Arr destructoring, useState always returns an arr with exactly 2 elements pulling 2 elements out of returned arr and 
    // store them in seperate constants of the name enteredUsername and setUsername and it shows those names for those constants
    // bc first element in arr is the current state snap shot(whatever is already there(before you change it))
        // enteredUsername holds the current val of whatever is already there setEnteredUsername holds whatever you want to change it to
        // and whatever the screen is going to change to 
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        // prevent the form from submitting a request to the browser to prevent a reload(want to change things dynamically)
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non empty values)"
            })
            // nothing happens bc return statements end function executions
            return;
        } 
        if(+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid  age (>0)"
            })
            return;
        }
        // Forwarding the entered data to App
        props.onAddUser(enteredUsername, enteredAge);
        // Reset inputs after submitting form by setting them to emtpy strings
        setEnteredUsername('');
        setEnteredAge('');
    };

    const userNameChangeHanlder = (event) => {
        // set to whatever the user inputs; get that input with event with that we can get the target which is the input in form
        // then get the currently entered value
        setEnteredUsername(event.target.value)
    };

    const ageChangeHanlder = (event) => {
        setEnteredAge(event.target.value)
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHanlder}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHanlder}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;