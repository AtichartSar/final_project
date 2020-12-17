import React from 'react'

import './Sidedrawer.css'
import { Link } from 'react-router-dom'
import Menubar from '../../../config/menuNavbar'
import { useSelector, useDispatch } from 'react-redux';
import {
setUser,getUser
} from '../../../features/user/userSlice'
function Sidedrawer(props) {
const user = useSelector(getUser)
    const role = user || 'user'
    // const role = 'guest'
    const allowedMenu = Menubar[role].allowedRoutes
    console.log("allowedMenu", allowedMenu);
    let draweClasses = ['side-drawer']
    if (props.show) {
        draweClasses = ['side-drawer open']
    }
    return (
        <nav className={draweClasses}>
            <ul>
                {allowedMenu.map((item, index) => (
                    <li key={index}>
                        <div className='menu'>
                            {item.icon}
                            <Link to={item.url} className="header_link">
                                <div className="header_option">
                                    <span className="header_optionLineOne">{item.label}</span>
                                </div>
                            </Link>
                        </div>

                    </li>
                ))}

                {/* <li>
                    <Link to="/login" className="header_link">
                        <div className="header_option">
                            <span className="header_optionLineOne">Login</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/payment" className="header_link">
                        <div className="header_option">
                            <span className="header_optionLineOne">Payment</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="header_link">
                        <div className="header_option">
                            <span className="header_optionLineOne">Register</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/editmenu" className="header_link">
                        <div className="header_option">
                            <span className="header_optionLineOne">EditMenu</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="header_link">
                        <div className="header_option">
                            <span className="header_optionLineOne">Profile</span>
                        </div>
                    </Link>
                </li> */}

            </ul>
        </nav>
    )
}

export default Sidedrawer
