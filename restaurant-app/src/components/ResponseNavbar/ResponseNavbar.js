import React from 'react'
import { useState } from 'react'
import Backdrop from './Backdrop/Backdrop'
import Sidedrawer from './Sidedrawer/Sidedrawer'
import Toolbar from './Toolbar/Toolbar'
import { Link } from 'react-router-dom'
function ResponseNavbar() {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
    const backdropClickHandler = () => {
        setSideDrawerOpen(false);
    }
    const drawerToggleClickHandlw = () => {
        setSideDrawerOpen(!sideDrawerOpen)
    }
    console.log(sideDrawerOpen);
    return (
        <div>

            <Toolbar drawerClickHandle={drawerToggleClickHandlw} />
            <Sidedrawer show={sideDrawerOpen} />
            { sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
        </div>
    )
}

export default ResponseNavbar
