import React from 'react'

import './Sidedrawer.css'
import { Link } from 'react-router-dom'
import Menubar from '../../../config/menuNavbar'
import { useSelector, useDispatch } from 'react-redux';
import {
    setUser, getUser
} from '../../../features/user/userSlice'
import {
    resetCart
} from '../../../features/cart/cartSlice'
import LocalStorage from '../../../services/localStorageService'
function Sidedrawer(props) {
    const user = useSelector(getUser)
    const dispatch = useDispatch();
    const role = user || 'user'
    // const role = 'guest'
    const allowedMenu = Menubar[role].allowedRoutes
    console.log("allowedMenu", allowedMenu);
    let draweClasses = ['side-drawer']
    if (props.show) {
        draweClasses = ['side-drawer open']
    }
    const handleclick = () => {
        window.location.reload();
        dispatch(resetCart())
        LocalStorage.removeToken()
        dispatch(setUser('guest'))
    }
    return (
        <nav className={draweClasses}>
            <ul>
                {allowedMenu.map((item, index) => (
                    <li key={index}>
                        <div className='menu'>
                            {item.icon}
                            {item.logout ?
                                <Link onClick={() => handleclick()} className="header_link">
                                    <div className="header_option">
                                        <span className="header_optionLineOne">{item.label}</span>
                                    </div>
                                </Link> :
                                <Link to={item.url} className="header_link">
                                    <div className="header_option">
                                        <span className="header_optionLineOne">{item.label}</span>
                                    </div>
                                </Link>

                            }

                        </div>

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Sidedrawer
