import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';

function CommentList({comments}) {
    return (
        <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
            itemLayout="horizontal"
            renderItem={props => <Comment {...props} />}
        />
    )
}

export default CommentList 
