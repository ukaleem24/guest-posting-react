import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-solid-svg-icons'
import classes from 'assets/css/cutom_css/notifications/notifications.module.css'
import { NavLink } from 'react-router-dom';

const Notifications = () => {
  return (
    <>
    <NavLink to='/event'>
    <span className='mr-4' >
    <FontAwesomeIcon className={classes.bell} icon= {faBell  }/>
    <span className={classes['notifications-container']}>2</span> 
    </span>
    </NavLink>
    
    </>
  )
}

export default Notifications