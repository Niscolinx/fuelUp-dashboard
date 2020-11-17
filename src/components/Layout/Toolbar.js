import React from 'react'
import {BsFillGearFill} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'

import Logo from './Logo'
import avatar from '../../assets/images/avatar/avatar.jpg'
import NavigationItems from './Navigation/NavigationItems'
import SideDrawerToggle from './Navigation/SideDrawerToggle'

const toolbar = (props) => (
    <div className='toolbar'>
        <SideDrawerToggle clicked={props.openSideDrawer} />
        <Logo />
        <nav className='desktopOnly'>
            <NavigationItems auth={props.auth} logOut={props.logOut} />
        </nav>

        <div>
            <BsFillGearFill/>
            <IoMdNotifications/>

            <img src={avatar} alt='avatar'/>
        </div>
    </div>
)

export default toolbar
