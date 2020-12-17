import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

function ModalComponent(props) {
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

    console.log("click", props.click)
    const handleCancel = () => {
        setVisible(false);
    };
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 500);
    };
    return (
        <>
            <Button type="primary" className="submitButton" onClick={showModal}>เลือกประเภทอาหาร </Button>
                
            <Modal
                title="ประเภทอาหาร"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {console.log(props)}
                {props.children}
            </Modal>
        </>
    )
}

export default ModalComponent
