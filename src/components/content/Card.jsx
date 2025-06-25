import React from 'react'
import './Card.css';
const Card = (props) => {
    return (
        <>
        <div className='main'></div>
        <div  className='acard'>
            <img src={props.image}alt=""></img>
            <h1>username is {props.UserName}</h1>
            <h2>City {props.city}</h2>
            <button>Submit</button>
        </div>

        </>
)
}

export default Card
