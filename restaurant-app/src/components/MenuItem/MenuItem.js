import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  addToCart,
  selectCart
} from '../../features/cart/cartSlice';

import { useHistory } from "react-router-dom";
import { Card } from 'antd';
import './MenuItem.css'
import { Rate } from 'antd';
import { Button } from 'antd';
const { Meta } = Card;

function MenuItem({ title, description, image, rate, price, showbtn, model }) {

  const dispatch = useDispatch();
  const countss = useSelector(selectCart);
  let history = useHistory();
  const handleclickReview = () => {
    history.push({
      pathname:'/review',
      state: { detail: model.id }

    }
      )
  }
  const handleAddToCart=()=>{
    dispatch(addToCart({
      item:model
    }
      
    ))
  }
  console.log(countss);

  const priceContent = price && <h3>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'THB' }).format(price)} </h3>
  const rateContent = rate && <Rate disabled allowHalf defaultValue={rate} />
  const buttonContent = showbtn &&
    <div className='button_menu'>
      <Button className="reviewButton" onClick={() => handleclickReview()} type="primary" size={'large'}>
        รีวิว
  </Button>
      <Button className='submitButton' onClick={() => handleAddToCart()} type="primary" size={ 'large' }>
        เลือก
  </Button>
    </div>

  return (
    <div className='item' style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={image} />}
      >
        <Meta title={title} description={description} />
        
        {priceContent}
        {rateContent}
        {buttonContent}
      </Card>
    </div>

  )
}

export default MenuItem
