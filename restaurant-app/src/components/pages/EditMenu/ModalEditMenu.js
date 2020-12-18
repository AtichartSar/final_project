import {
    Modal, Button, Row, Col, Form,
    Input,

    Select,
} from 'antd';

import React, { useEffect, useRef, useState } from 'react'
import MenuItem from '../../MenuItem/MenuItem';
import FormEdit from './FormEdit';
import {
    StarOutlined
} from '@ant-design/icons';
import axios from '../../../config/axios';
const { Option } = Select;
const { TextArea } = Input;
function ModalEditMenu({fetchMenu, model, visible, title, handleVisible, type, rate, price, description, id }) {
    const [dataReview, setDataReview] = useState(null)
    const [valuePrice, setValuePrice] = useState('')
    const [titleReview, setTitleReview] = useState('')
    const [form] = Form.useForm();


    const formRef = useRef()

    const handleOnChange = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            setValuePrice(value)
        }

    };
    useEffect(() => {
  
            setDataReview(null)
            setValuePrice(price)
            setDataReview(model)
            setTitleReview(title)
            console.log("dataReview", dataReview);
            form.setFieldsValue({
                name: title,
                rate: rate,
                description: description,
                type: type
              });
        

    }, [id])
    const onFinish = async (values) => {
        console.log(values);
        const payload = { ...values, price: valuePrice }
        console.log("payload", payload);
        console.log("id", id);
        await axios.put(`/menu/${id}`, { ...payload })
        handleVisible()
        fetchMenu()
    }
    return (
        <>
            {console.log("render")}
            <Modal
                title="แก้ไขรายละเอียดสินค้า"
                centered
                visible={visible}
                onOk={() => handleVisible()}
                onCancel={() => handleVisible()}
                width={1000}
                footer={[
                    <Button onClick={() => handleVisible()} key="back" >
                        กลับ
                    </Button>,


                ]}
            >
                <Row gutter={[0, 40]} justify='space-around' style={{ marginTop: '1rem' }}>
                    <Col md={24} lg={8} >

                        <MenuItem
                            title={title}
                            description={description}
                            image={dataReview?.image}
                            price={price}
                            rate={rate}
                            id={id}

                        />
                    </Col>
                    <Col md={24} lg={16} >
                        <div className="progressbar_content">
                            {/* <FormEdit titleEdit={dataReview?.title} model={dataReview} />
                             */}
                            <Form
                                labelCol={{
                                    span: 4,
                                }}
                                wrapperCol={{
                                    span: 14,
                                }}
                                layout="horizontal"
                                initialValues={{
                                    size: 'default',
                                }}
                                size='default'
                                onFinish={onFinish}
                                form={form}
                                initialValues={{
                                    // name: title,
                                    rate: rate,
                                    description: description,
                                    type: type
                                }}
                                // setFieldValue ={(title)=>{
                                //     name: title
                                // }}

                            >
                                <Form.Item
                                    name="name"
                                    label="ชื่อเมนู"

                                >
                                    <Input  />
                                </Form.Item>
                                <Form.Item name="type" label="ประเภทเมนู" >
                                    <Select placeholder="เลือกประเภทเมนู"
                                    >
                                        <Option value={1}>อาหารไทย</Option>
                                        <Option value={2}>อายหารญี่ปุ่น</Option>
                                        <Option value={3}>อาหารฝรั่ง</Option>
                                        <Option value={4}>ของหวาน</Option>

                                    </Select>
                                </Form.Item>
                                <Form.Item name="rate" label="คะแนน" >
                                    <Select placeholder="เลือกคะแนน"
                                    >
                                        <Option value={1}>1<StarOutlined style={{ color: '#FAFF00' }} /></Option>
                                        <Option value={2}>2<StarOutlined style={{ color: '#FAFF00' }} /></Option>
                                        <Option value={3}>3<StarOutlined style={{ color: '#FAFF00' }} /></Option>
                                        <Option value={4}>4<StarOutlined style={{ color: '#FAFF00' }} /></Option>
                                        <Option value={5}>5<StarOutlined style={{ color: '#FAFF00' }} /></Option>

                                    </Select>
                                </Form.Item>
                                <Form.Item label="ราคา">
                                    <Input
                                        value={valuePrice}
                                        onChange={handleOnChange}
                                    />
                                </Form.Item>
                                <Form.Item name="description" label="รายละเอียด" >
                                    <TextArea rows={4} />
                                </Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    ยืนยัน
                                </Button>
                            </Form>

                        </div>


                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ModalEditMenu

