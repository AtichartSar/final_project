import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar'
import './Invoice.css'

import { useSelector, useDispatch } from 'react-redux';
import {
    selectCart,
    getCartTotal
} from '../../../features/cart/cartSlice'

function Invoice() {
    const history = useHistory()
    const cart = useSelector(selectCart);
    const [dataInvoiceList, setDataInvoiceList] = useState(null)
    const [totalOfBill, settotalOfBill] = useState(null)
    const handleClick = () => {
        // var printContents = ReactDOM.findDOMNode(<Invoice/>).getElementsByClassName('ticket').innerHTML;
        // var elementsArray = document.getElementsByClassName("ticket")[0].innerHTML;
        // console.log(elementsArray);
        window.print()
    }
    useEffect(() => {
        const carttotal = getCartTotal(cart)
        const totalOfbill = carttotal.reduce((value, current) => value + current.price, 0)
        settotalOfBill(totalOfbill)
        setDataInvoiceList(carttotal)
        console.log("carttotal", carttotal);
        ;
    }, [])
    return (
        //         count: 2
        // createdAt: "2020-12-15T14:22:27.000Z"
        // description: "ปลาย่าง"
        // id: 2
        // image: "http://localhost:8000/uploads\img-1608042147196.jpg"
        // price: 300
        // rate: 4
        // title: "ปลา"
        // type: 2
        // updatedAt: "2020-12-15T14:22:27.000Z"

        <div className='invoice'>
            <ResponseNavbar />
            <div className="invoice__content">
                <div className="ticket">
                    <h3>ใบแจ้งหนี้/Invoice</h3>
                    <table>
                        <thead>
                            <tr>
                                <th className="quantity">Q.</th>
                                <th className="description">Description</th>
                                <th className="price">$$</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataInvoiceList?.map(item => (<>
                                <tr>
                                    <td className="quantity">{item.count}</td>
                                    <td className="description">{item.description}</td>
                                    <td className="price">{item.price}</td>
                                </tr>
                            </>))}
                        </tbody>
                    </table>
                    <div>รวม {totalOfBill} $</div>
                    
                </div>
                <div className="button_content">
                    {/* <Button className='submitButton' type="primary" size={'large'}>  ยืนยัน</Button> */}
                    <Button onClick={() => handleClick()} className='submitButton' type="primary" size={'large'}>  พิมพ์</Button>
                    <Button onClick={() => (history.goBack())} className='cancelButton' type="primary" size={'large'}>  ยกเลิก</Button>
                </div>
            </div>
        </div>
    )
}

export default Invoice
