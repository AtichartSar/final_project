
import { Modal, Button, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react'
import MenuItem from '../../MenuItem/MenuItem';
import FormEdit from './FormEdit';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './EditMenu.css'

function ModalCreateMenu({ visible, handleVisible }) {
    const [dataReview, setDataReview] = useState(null)
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);

    useEffect(() => {
        setDataReview({
            alt: "2",
            count: 1,
            description: "is a course that concludes a meal. The course usually consists of sweet foods",
            id: 2,
            image: "/images/foods_japanese/j2.jpg",
            price: 500,
            rate: 3,
            title: "Pizza",
            type: 3,
        })
    }, [])

    const handleChange = (e) => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
            console.log("picture",picture);
            // console.log("picture",imgData);
        }

    }

    return (
        <>
            
            <Modal
                title="เพิ่มสินค้า"
                centered
                visible={visible}
                onOk={() => handleVisible()}
                onCancel={() => handleVisible()}
                width={1000}
                footer={[
                    <Button onClick={()=>handleVisible()} key="back" >
                        กลับ
                    </Button>,
           
                ]}
            >
                <Row gutter={[0, 40]} justify='space-around' style={{ marginTop: '1rem' }}>
                    <Col md={24} lg={8} >

                        <div className="img-holder">
                            <img src={imgData} alt="" id="img" className="img" />
                        </div>
                        <input type="file" accept="image/*" name="image-upload" id="input" onChange={handleChange} />
                    </Col>
                    <Col md={24} lg={16} >
                        <div className="progressbar_content">
                            <FormEdit handleVisible2={handleVisible}  picture={picture}    />
                        </div>


                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ModalCreateMenu
