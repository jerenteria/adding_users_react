import React from 'react';
// .. means go out of current folder in this case Users and then go into components then UI then into Card.js
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = props => {
    const addUserHandler = (event) => {
        // prevent the form from submitting a request to the browser to prevent a reload(want to change things dynamically)
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;