
import React from 'react'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar'
import './Register.css'
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import axios from '../../../config/axios'
function Register() {
    const onFinish = async (values) => {
        const payload = {
            email: values.email,
            password: values.password,
            username: values.username
        }

        console.log('Success:', payload);
        try {
            await axios.post(`/user/register`, payload)
            notification.success({
                message: `you ${values.email} register success`,
            });
        } catch (error) {
            notification.error({
                message: `you error ${error}`,
            });
        }

    };
    return (
        <div className='register'>
            <ResponseNavbar />
            <div className='register__content'>
                <h1>สมัครสมาชิก</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="ชื่อผู้ใช้" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="อีเมล" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="password" />
                    </Form.Item>
                    <Form.Item
                        name="confirm"

                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('กรุรากรอกรหัสผ่านให้ถูกต้อง');
                                },
                            }),
                        ]}
                    >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button"> ยืนยัน </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default Register
