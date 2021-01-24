import React from 'react'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar'
import { Form, Input, Button, Checkbox, notification } from 'antd';
import './Login.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LocalStorageService from '../../../services/localStorageService'
import axios from '../../../config/axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {
setUser,getUser
} from '../../../features/user/userSlice'
import {
    resetCart
} from '../../../features/cart/cartSlice'
import jwtDecode from 'jwt-decode'
function Login() {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
const history = useHistory()

    const onFinish = async (values) => {
        console.log('Success:', values);
        const payload = {
            username: values.Username,
            password: values.password
        }
        console.log("payload", payload);
        try {
           const res=  await axios.post('/user/login', payload)
            LocalStorageService.setToken(res.data.token)
            const {role}=jwtDecode(res.data.token)
            if(role=='admin'){
               dispatch(setUser('user')) 
            }else{
                history.push('/home')
            }
            notification.success({
                message: `${res.data.message}`,
            });
            dispatch(resetCart())
        } catch (error) {
            notification.error({
                message: `การเข้าสู่ระบบล้มเหลว ${error}`,
            });
        }



    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login">
            <ResponseNavbar />
            <div className="login__content">
                <h1>เข้าสู่ระบบ </h1>


                <Form

                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="Username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        </Form.Item>
                    </Form.Item>


                    <Button type="primary" htmlType="submit" className="login-form-button">
                        เข้าสู่ระบบ
                    </Button>


                </Form>
            </div>

        </div>
    )
}

export default Login
