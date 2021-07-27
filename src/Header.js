import React from 'react'
import './Header.css';
import './HeaderOption.js'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const dispatch=useDispatch();
    const logoutOfApp=()=>{
        dispatch(logout());
        auth.signOut()
    }
    return (
        <div className='header'>
            {/* <h1>Header</h1> */}
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__search">
                    {/* search icon */}
                    <SearchIcon  />
                    <input placeholder='Search' 
                    type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notification'/>
                <HeaderOption avatar={true}
                title='me'
                onClick={logoutOfApp} />
                
            </div>


        </div>
    )
}

export default Header
