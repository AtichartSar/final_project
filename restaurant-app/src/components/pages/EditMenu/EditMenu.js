import { Button, Card, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar'
import './EditMenu.css'
import {

    SettingOutlined,

} from '@ant-design/icons';
import { Form} from 'antd';
import { useHistory } from 'react-router-dom';
import ModalEditMenu from './ModalEditMenu';
import ModalCreateMenu from './ModalCreateMenu';
import axios from '../../../config/axios'

function EditMenu() {
    const history = useHistory()
    const [visibleEdit, setVisibleEdit] = useState(false)
    const [visibleCreate, setVisibleCreate] = useState(false)
    const [editTarget, setEditTarget] = useState(null)
    const [data, setdata] = useState(null)
    const [form] = Form.useForm();

    const columns = [
        {
            title: 'รายการอาหาร',
            dataIndex: 'title',
            key: 'title',

        },
        {
            title: 'ประเภทอาหาร',
            dataIndex: ["MenuType","title"],
            key: 'type',
            
        },
        {
            title: 'ราคา',
            dataIndex: 'price',
            key: 'price'

        },
        {
            title: 'แก้ไข',
            key: 'edit',
            render: (text, record) => (
                <a onClick={() => handelClickSetting(record)} style={{ alignSelf: 'center' }}><SettingOutlined style={{ color: '#41AEA9' }} /></a>
            )

        }

    ]

    const fetchMenu=async ()=>{
        const httpResponse  = await axios.get('/menu')
        setdata(httpResponse.data)
        console.log("data",data);
    }
    useEffect(() => {
        // const data = [{
        //     alt: "2",
        //     count: 1,
        //     description: "is a course that concludes a meal. The course usually consists of sweet foods",
        //     id: 2,
        //     image: "/images/foods_japanese/j2.jpg",
        //     price: 500,
        //     rate: 3,
        //     title: "Pizza",
        //     type: 3,
        // }]
        fetchMenu()
        // setdata(data)
    }, [])
    const handelClickSetting = (record) => {
        // form.resetFields();
        setEditTarget(record)
        setVisibleEdit(true)
        console.log("editTarget", editTarget);
    }
    const handleVisibleEdit = () => {
        
        setEditTarget(null)
        setVisibleEdit(false)
        console.log("editTarget",editTarget);
        
    }
    const handleVisibleCreate = () => {
        setEditTarget(null)
        setVisibleCreate(false)
       
    }
    return (

        <div className='editMenu'>

            <ResponseNavbar />
            <div className='editMenu__content'>
                <Card id="editMenu" className="editMenu" title="แก้ไขรายการอาหรา" bordered={false} cover>
                    <Table columns={columns} dataSource={data} />
                </Card>
                <div className="button_content">
                    {/* <Button className='submitButton' type="primary" size={'large'}>  ยืนยัน</Button> */}
                    <Button onClick={() => setVisibleCreate(true)} className='submitButton' type="primary" size={'large'}>  เพิ่มสินค้า</Button>
                    <Button onClick={() => (history.push('/home'))} className='cancelButton' type="primary" size={'large'}>  ยกเลิก</Button>
                </div>
            </div>
            <ModalEditMenu
                visible={visibleEdit}
                model={editTarget}
                type={editTarget?.type}
                rate={editTarget?.rate}
                title={editTarget?.title}
                price={editTarget?.price}
                id={editTarget?.id}
                form={form}
                description={editTarget?.description}
                handleVisible={handleVisibleEdit} />
            <ModalCreateMenu visible={visibleCreate} handleVisible={handleVisibleCreate} />

        </div>
    )
}

export default EditMenu
