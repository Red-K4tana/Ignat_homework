import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'


const classNavLink = ({isActive}:{isActive: boolean}) => s.navLink + (isActive ? ' ' + s.active : '');

function Header() {
    return (
        <div>
            <div className='navbar'>
                <NavLink className={classNavLink} to='/pre-junior'>PreJunior</NavLink>
                <NavLink className={classNavLink} to='/junior'>Junior</NavLink>
                <NavLink className={classNavLink} to='/juniorPlus'>Junior+</NavLink>

            </div>
            <hr/>
        </div>
    )
}

export default Header
