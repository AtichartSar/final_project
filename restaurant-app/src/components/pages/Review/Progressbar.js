import React from 'react'
import './Review.css'
import {
    StarOutlined,


} from '@ant-design/icons';
import { Progress } from 'antd';

function Progressbar({ label, percent }) {
    return (
        <div className='review__5'>
            <StarOutlined style={{ color: '#FAFF00' }} />
            <span style={{ marginRight: '5px' }}>{label}</span>
            <Progress strokeColor={{
                '0%': '#41AEA9',
                '100%': '#87d068',
            }} percent={percent} size="large" />
        </div>
    )
}

export default Progressbar
