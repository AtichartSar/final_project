import React, { useEffect, useState } from 'react'
import { Comment, Avatar, Input, Rate, Select, Form } from 'antd';
import Editor from './ComponentComment/Editor';
import CommentList from './ComponentComment/CommentList ';
import {
    StarOutlined
} from '@ant-design/icons';


const { Option } = Select;
function ComentReview({ dataReviews, addReview }) {
    const [comments, setComment] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const [value, setValue] = useState('')
    const [valueRate, setValueRate] = useState(3)

    useEffect(() => {
        console.log();
        let newReview = dataReviews?.map(item => ({
            author: 'Han Solo',
            avatar: './images/icons/user.png',
            content: item.description
        }
        ))
        setComment(newReview)
    }, [dataReviews])

    const handleChange = e => {
        console.log(e.target.value);
        setValue(e.target.value)
    };
    const handleChangeRate = (value) => {
        console.log(value);
        setValueRate(value)
    };


    const handleSubmit = async () => {

        if (!value) {
            return;
        }
        console.log("valueRate", value);
        console.log("valueRate", valueRate);
        addReview(value, valueRate)

        setTimeout(() => {
            setSubmitting(false)
            setValue('')
        }, 1000);
    };

    return (
        <div>
            <hr />

            <Comment
                avatar={
                    <Avatar
                        src='./images/icons/user.png'
                        alt="Han Solo"
                    />
                }
                content={
                    <Editor
                        onChange={handleChange}
                        onChangeRate={handleChangeRate}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                        valueRate={valueRate}
                    />
                }
            />


            {dataReviews?.length > 0 && <div className="comment_content">
                {comments?.length > 0 && <CommentList comments={comments} />}
            </div>}
        </div>
    )
}

export default ComentReview
