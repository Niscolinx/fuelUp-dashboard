import React from 'react'
import {BsFillGearFill} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'

import Logo from './Logo'
import avatar from '../../assets/images/avatar/avatar.jpg'
import NavigationItems from './Navigation/NavigationItems'

const toolbar = (props) => (
    <div className='toolbar'>
        <Logo />
        <nav className='toolbar__nav'>
            <NavigationItems auth={props.auth} logOut={props.logOut} />
        </nav>

        <div>
            <BsFillGearFill/>
            <IoMdNotifications/>

            <img src={avatar} alt='avatar' className='toolbar__avatar'/>
        </div>
    </div>
)

export default toolbar
