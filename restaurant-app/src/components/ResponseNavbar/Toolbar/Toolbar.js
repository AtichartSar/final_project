import React from 'react'
import './Toolbar.css'
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCart
} from '../../../features/cart/cartSlice';
import {
    MenuOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Badge, Button, Switch } from 'antd';
import {
    ShoppingCartOutlined,
} from '@ant-design/icons';
function Toolbar(props) {

    const itemsCart = useSelector(selectCart);
    return (
        <header className='toolbar'>
            <nav className='toolbar_navigation'>
                <div className='toolbar_toggle-button'>
                    <button onClick={props.drawerClickHandle}>
                        <MenuOutlined className='toggle-button' onClick={props.click} />
                    </button>
                </div>
                <div className='toolbar_logo'>
                    <a href="/">THE LOGO</a>
                </div>
                <div className='spacer'></div>njjkj
                <div className='spacer'></div>
                <div className='toolbar_navigation_item'>

                    <ul>
                        <li> <a href="/">OOP1</a></li>
                        <li>
                            <Link to={'/payment'}>
                                <Badge count={itemsCart.length}>
                                    <ShoppingCartOutlined style={{fontSize: '28px', color: '#41AEA9', display:'inline-block',width:'32px',height:'32px'}} />
                                </Badge>
                            </Link>
                           
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Toolbar
