
import React from 'react'
import {
    StarOutlined
} from '@ant-design/icons';
import { Comment, Avatar, Form, Button, List, Select, Input } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
function Editor({ onChange, onSubmit, submitting, value, onChangeRate, valueRate }) {
    return (
        <>
            <Form.Item label="คะแนน" >

                <Select placeholder="เลือกคะแนน" onChange={onChangeRate} value={valueRate}
                >
                    <Option value={1}>1<StarOutlined style={{ color: '#FAFF00' }} /></Option>
                    <Option value={2}>2<StarOutlined style={{ color: '#FAFF00' }} /></Option>
                    <Option value={3}>3<StarOutlined style={{ color: '#FAFF00' }} /></Option>
                    <Option value={4}>4<StarOutlined style={{ color: '#FAFF00' }} /></Option>
                    <Option value={5}>5<StarOutlined style={{ color: '#FAFF00' }} /></Option>

                </Select>
            </Form.Item>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>

                <Button className='submitButton' type="primary" size={'large'}
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary">
                    ยืนยัน
                </Button>
            </Form.Item>
        </>
    )
}

export default Editor
