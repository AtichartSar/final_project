
import React, { useState } from 'react';
import axios  from '../../../config/axios'
import {
    Form,
    Input,
    Button,
    Select,
    
} from 'antd';
import {
    StarOutlined
} from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;
function FormEdit({picture,handleVisible2,fetchMenuEdit}) {
    // const [onChange, setOnChange] = useState('')
    const [valuePrice, setValuePrice] = useState('')

    const handleOnChange = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            setValuePrice(value)
        }

    };
    const onFinish = async (values) => {
        
        console.log('SuccessCreate:', values);
        const payload = {...values,price:valuePrice}

        const formData = new FormData()
        formData.append('categoryImage', picture)
        formData.append('payload', JSON.stringify(payload))

        await axios.post('/menu',formData)
        console.log("data",Object.fromEntries(formData))
        handleVisible2()
        fetchMenuEdit()
    };
    return (
        <>
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
            >
                <Form.Item name="title" label="ชื่อเมนู">
                    <Input />
                </Form.Item>
                <Form.Item name="type" label="ประเภทเมนู">
                    <Select  placeholder="เลือกประเภทเมนู" >
                        <Option value={1}>อาหารไทย</Option>
                        <Option value={2}>อายหารญี่ปุ่น</Option>
                        <Option value={3}>ของหวาน</Option>
                        <Option value={4}>อาหารฝรั่ง</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="rate" label="คะแนน" >
                    <Select placeholder="เลือกคะแนน" >
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
        </>
    )
}

export default FormEdit
