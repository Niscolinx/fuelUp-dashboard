import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt='' className='card__img' />
            <div className='card__content'>
                <h3 className='card__heading'>{props.heading}</h3>
                <p className='card__subHeading'>{props.subHeading}</p>
                <p className='card__text'>{props.text}</p>
            </div>

            <div className='card__creator'>
                <img
                    src={props.creatorImg}
                    alt=''
                    className='card__creator--img'
                />
                <div>
                    <h5 className='card__creator--name'>
                        Created by {props.creatorName}
                    </h5>
                    <p className='card__creator--data'>
                        Created on {props.createdAt}
                    </p>
                </div>
            </div>

            <div className='card__controls'>
                <button className='card__controls--btn'>View</button>

                <div>
                    <p className='card__controls--action'>Action</p>
                    <AiFillCaretDown className='card__controls--down'/>
                </div>
            </div>
        </div>
    )
}

export default Card
