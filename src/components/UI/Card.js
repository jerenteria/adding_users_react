import React from 'react';
import classes from './Card.module.css'

// A Card is basically a what we would call a "container" in css but is called a card in react
// You are just returning whatever is wrapped arround this component in other files with the same style
const Card = (props) => {
    // props.children will return whatever is enclosed between the opening and closing tag of card component in this case a form
return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;