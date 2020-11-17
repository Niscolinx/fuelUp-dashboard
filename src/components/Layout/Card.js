import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt='' className='card__img'/>
            <div className='card__content'>
    <h3 className='card__heading'>{props.heading}</h3>
                <p className='card__text'>{props.text}</p>
            </div>
        </div>
    )
}

export default Card
