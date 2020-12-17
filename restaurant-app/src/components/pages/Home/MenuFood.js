import React from 'react'
import { Row, Col,Card } from 'antd';
import MenuItem from '../../MenuItem/MenuItem'

import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../../../features/cart/cartSlice';

function MenuFood({selectGroup}) {
    console.log(selectGroup);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const handleClick  = (item) =>{
        console.log(item);
        dispatch(increment())
    }

    return (
        <>
            <Card id="menuFood" className="menuFood" title="เลือกอาหาร" bordered={false} cover>
                <Row gutter={[0, 40]} justify='center' style={{ marginTop: '1rem' }}>
                    {selectGroup?.map(item => (
                        <Col key={item.id} md={24} md={8} lg={6} >
                            <MenuItem
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                price={item.price}
                                rate={item.rate}
                                showbtn={true}
                                id={item.id}
                                model={item}
                            />
                        </Col>
                    ))}

                </Row>
            </Card>
        </>
    )
}

export default MenuFood
