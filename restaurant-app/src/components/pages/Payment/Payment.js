import React, { useEffect, useState } from 'react'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar'
import { Row, Col, Card } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Button } from 'antd';
import './Payment.css'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCart,
  getCartTotal,
  increaseItem,
  addToCart,
  decreaseItem,
  cancelAllItem
} from '../../../features/cart/cartSlice';

import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteOutlined,

} from '@ant-design/icons';
import LocalStorage from '../../../services/localStorageService'
import axios from '../../../config/axios'
import jwtDecode from 'jwt-decode'
{/* <DeleteOutlined /> */ }



function Payment() {
  const [dataCart, setDataCart] = useState(null)
  // const [dataProfile, setDataProfile] = useState()
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();
  let history = useHistory();
 


  useEffect(() => {
    const dataCart = getCartTotal(cart)
    // const token = LocalStorage.getToken()
    setDataCart(dataCart)
    // setDataProfile({...jwtDecode(token)})
  }, [cart])

  // alt: "2"
  // count: NaN
  // description: "is a course that concludes a meal. The course usually consists of sweet foods"
  // id: 2
  // image: "/images/foods_japanese/j2.jpg"
  // price: 500
  // rate: 3
  // title: "Pizza"
  // type: 3
  const handleAddItem = (id) => {
    console.log("item", id);
    dispatch(increaseItem({ id }))
    console.log(cart);
  }

  const handleDeleteItem = (id) => {
    dispatch(decreaseItem({ id }))


  }
  const handleCancelAllItem = (id) => {
    dispatch(cancelAllItem({ id }))
  }

  const data = dataCart
  const columns = [
    {
      title: 'รายการอาหาร',
      dataIndex: 'title',
      key: 'title',

    },
    {
      title: 'ประเภทอาหาร',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'จำนวน',
      dataIndex: 'count',
      key: 'count',
      render: (text, record) => (
        <Space size="middle">
          <label >{text}</label>
          <a onClick={() => handleAddItem(record.id)}><PlusCircleOutlined style={{ color: '#41AEA9' }} /></a>
          <a onClick={() => handleDeleteItem(record.id)}><MinusCircleOutlined style={{ color: '#FF0000' }} /></a>
        </Space>
      )
    },
    {
      title: 'ราคา',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => (
        <Space size="middle">
          <label>{text}$</label> 
          <a onClick={() => handleCancelAllItem(record.id)}><DeleteOutlined style={{ color: '#FF0000' }} /></a>
        </Space>
      )
    }

  ]

  const handlePayment= async ()=>{
    const payload={
      items:dataCart
    }
    const httpresponse=axios.post('/invoice/',{...payload})
    console.log(httpresponse.data);
    history.push('/invoice')
  }
  return (
    <div className='payment'>
      <ResponseNavbar />
      <div className='payment__content'>

        <div className='paymentCard_content'>
          <Card id="payment" className="payment" title="หน้าชำระเงิน" bordered={false} cover>
            <Table columns={columns} dataSource={data} />
            <div className="button_content">
              <Button onClick={()=>handlePayment()} className='submitButton' type="primary" size={'large'}>  ยืนยัน</Button>
              <Button onClick={() => (history.push('/home'))} className='cancelButton' type="primary" size={'large'}>  ยกเลิก</Button>
            </div>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default Payment
